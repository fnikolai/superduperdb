import itertools
import typing as t
from contextlib import contextmanager
import dataclasses as dc


from superduperdb.core.component import Component
from superduperdb.core.dataset import Dataset
from superduperdb.core.documents import Document
from superduperdb.core.encoder import Encodable
from superduperdb.core.metric import Metric
from superduperdb.core.model import Model, ModelEnsemble
from superduperdb.core.watcher import Watcher
from superduperdb.metrics.vector_search import VectorSearchPerformance
from superduperdb.misc.logger import logging
from superduperdb.misc.special_dicts import MongoStyleDict
from superduperdb.vector_search.base import (
    VectorCollection,
    VectorCollectionConfig,
    VectorCollectionItem,
    VectorIndexMeasureType,
)

T = t.TypeVar('T')


def ibatch(iterable: t.Iterable[T], batch_size: int) -> t.Iterator[t.List[T]]:
    """
    Batch an iterable into chunks of size `batch_size`
    """
    iterator = iter(iterable)
    while True:
        batch = list(itertools.islice(iterator, batch_size))
        if not batch:
            break
        yield batch


_BACKFILL_BATCH_SIZE = 100


@dc.dataclass
class VectorIndex(Component):
    """
    Vector-index

    :param identifier: Unique ID of index
    :param indexing_watcher: watcher which is applied to create vectors
    :param compatible_watchers: list of additional watchers which can
                                "talk" to the index (e.g. multi-modal)
    :param measure: Measure which is used to compare vectors in index
    """

    variety: t.ClassVar[str] = 'vector_index'

    identifier: str
    indexing_watcher: t.Union[Watcher, str]
    compatible_watchers: t.List[t.Union[Watcher, str]] = dc.field(default_factory=list)
    measure: VectorIndexMeasureType = 'css'
    db: dc.InitVar[t.Optional[t.Any]] = None
    version: t.Optional[int] = None
    metric_values: t.Optional[t.Dict] = dc.field(default_factory=dict)

    def __post_init__(self, db):
        if isinstance(self.indexing_watcher, str):
            self.indexing_watcher = db.load('watcher', self.indexing_watcher)
        for i, w in enumerate(self.compatible_watchers):
            if isinstance(w, str):
                self.compatible_watchers[i] = db.load('watcher', w)

        logging.info(f'loading hashes: {self.identifier!r}')

        # TODO: this is a temporary solution until we implement a CDC process that will
        # asynchronously
        # * backfill the index
        # * keep the index up-to-date
        with self._get_vector_collection() as vector_collection:
            for record_batch in ibatch(
                db.execute(self.indexing_watcher.select),  # type: ignore
                _BACKFILL_BATCH_SIZE,
            ):
                items = []
                for record in record_batch:
                    h, id = db.databackend.get_output_from_document(
                        record,
                        self.indexing_watcher.key,  # type: ignore
                        self.indexing_watcher.model.identifier,  # type: ignore
                    )
                    if isinstance(h, Encodable):
                        h = h.x
                    items.append(VectorCollectionItem.create(id=str(id), vector=h))
                vector_collection.add(items)

    @property
    def _dimensions(self) -> int:
        if not isinstance(self.indexing_watcher, Watcher):
            raise NotImplementedError
        if not isinstance(self.indexing_watcher.model, Model):
            raise NotImplementedError
        model_encoder = self.indexing_watcher.model.encoder
        try:
            dimensions = int(model_encoder.shape[-1])  # type: ignore
        except Exception:
            dimensions = None
        if not dimensions:
            raise ValueError(
                f"Model {self.indexing_watcher.model.identifier} has no shape"
            )
        return dimensions

    @contextmanager
    def _get_vector_collection(self) -> t.Iterator[VectorCollection]:
        from superduperdb.datalayer.base.database import VECTOR_DATABASE

        with VECTOR_DATABASE.get_collection(
            VectorCollectionConfig(
                id=self.identifier,
                dimensions=self._dimensions,
                measure=self.measure,
            )
        ) as vector_collection:
            yield vector_collection

    def get_nearest(
        self,
        like: Document,
        db: t.Optional[t.Any] = None,
        outputs: t.Optional[t.Dict] = None,
        featurize: bool = True,
        ids: t.Optional[t.List[str]] = None,
        n: int = 100,
    ) -> t.Tuple[t.List[str], t.List[float]]:
        models, keys = self.models_keys
        assert len(models) == len(keys)

        within_ids = ids or ()

        if db.db.id_field in like.content:  # type: ignore
            with self._get_vector_collection() as vector_collection:
                nearest = vector_collection.find_nearest_from_id(
                    str(like[db.db.id_field]), within_ids=within_ids, limit=n
                )
                return (
                    [result.id for result in nearest],
                    [result.score for result in nearest],
                )

        document = MongoStyleDict(like.unpack())

        if featurize:
            outputs = outputs or {}
            if '_outputs' not in document:
                document['_outputs'] = {}
            document['_outputs'].update(outputs)
            features = self.indexing_watcher.features or ()  # type: ignore
            for subkey in features:
                subout = document['_outputs'].setdefault(subkey, {})
                f_subkey = features[subkey]
                if f_subkey not in subout:
                    subout[f_subkey] = db.models[f_subkey]._predict(document[subkey])
                document[subkey] = subout[f_subkey]
        available_keys = list(document.keys()) + ['_base']
        try:
            model, key = next(
                (m, k) for m, k in zip(models, keys) if k in available_keys
            )
        except StopIteration:
            raise Exception(
                f'Keys in provided {like} don\'t match'
                f' VectorIndex keys: {keys}, with models: {models}'
            )
        model_input = document[key] if key != '_base' else document

        model = db.models[model]
        h = model.predict(model_input)  # type: ignore[attr-defined]
        with self._get_vector_collection() as vector_collection:
            nearest = vector_collection.find_nearest_from_array(
                h, within_ids=within_ids, limit=n
            )
            return (
                [result.id for result in nearest],
                [result.score for result in nearest],
            )

    @property
    def models_keys(self) -> t.Tuple[t.List[str], t.List[str]]:
        watchers = [self.indexing_watcher, *self.compatible_watchers]
        models = [w.model.identifier for w in watchers]
        keys = [w.key for w in watchers]
        return models, keys

    # ruff: noqa: F821, E501
    def _validate(
        self,
        db: 'superduperdb.datalayer.base.database.Database',  # type: ignore[name-defined]
        validation_set: t.Union[str, Dataset],
        metrics: t.List[t.Union[Metric, str]],
    ) -> t.Dict[str, t.List]:
        models, keys = self.models_keys
        models = [db.models[m] for m in models]  # type: ignore[arg-type]
        if isinstance(validation_set, str):
            validation_data = db.load('dataset', validation_set)

        metrics = list(metrics)  # in case someone passes a tuple by mistake
        for i, m in enumerate(metrics):
            if isinstance(m, str):
                metrics[i] = db.load('metric', m)

        unpacked = [r.unpack() for r in validation_data.data]  # type: ignore[union-attr]
        model_ensemble = ModelEnsemble(
            identifier='tmp', models=models  # type: ignore[arg-type]
        )
        msg = 'Can only evaluate VectorSearch with compatible watchers...'
        assert len(keys) >= 2, msg
        return VectorSearchPerformance(
            measure=self.measure,
            index_key=self.indexing_watcher.key,  # type: ignore[union-attr]
            compatible_keys=[w.key for w in self.compatible_watchers],  # type: ignore[union-attr]
        )(
            validation_data=unpacked,
            model=model_ensemble,
            metrics=metrics,  # type: ignore[arg-type]
        )
