import faiss
import numpy
import os
import torch

os.environ['KMP_DUPLICATE_LIB_OK']='True'


class HashSet:
    def __init__(self, h, index, measure):
        self.h = h
        self.index = index
        self.lookup = dict(zip(index, range(len(index))))
        self.measure = measure

    @property
    def shape(self):  # pragma: no cover
        return self.h.shape

    def find_nearest_from_id(self, _id, n=100):
        return self.find_nearest_from_ids([_id], n=n)[0]

    def find_nearest_from_ids(self, _ids, n=100):
        ix = list(map(self.lookup.__getitem__, _ids))
        return self.find_nearest_from_hashes(self.h[ix, :], n=n)

    def find_nearest_from_hash(self, h, n=100):
        return self.find_nearest_from_hashes(h[None, :], n=n)[0]

    def find_nearest_from_hashes(self, h, n=100):
        similarities = self.measure(h, self.h)
        print(similarities)
        scores, ix = similarities.topk(min(n, similarities.shape[1]), dim=1)
        ix = ix.tolist()
        scores = scores.tolist()
        ids = [[self.index[i] for i in sub] for sub in ix]
        return [{'scores': s, 'ix': i, '_ids': _id}
                for s, i, _id in zip(scores, ix, ids)]

    def __getitem__(self, item):
        ix = [self.lookup[i] for i in item]
        return HashSet(self.h[ix], item, self.measure)


class FaissHashSet(HashSet):
    def __init__(self, h, index, measure='l2', faiss_index=None):
        super().__init__(h, index, None)
        if isinstance(h, torch.Tensor):
            h = h.numpy().astype('float32')
        self.h = h
        self.index = index
        if faiss_index is None:
            if measure == 'css':
                h = h / (numpy.linalg.norm(h, axis=1)[:, None])
            if measure == 'l2':
                faiss_index = faiss.index_factory(self.h.shape[1], 'Flat', faiss.METRIC_L2)
            elif measure in {'css', 'dot'}:
                faiss_index = faiss.index_factory(self.h.shape[1], 'Flat', faiss.METRIC_INNER_PRODUCT)
            else:
                raise NotImplementedError(f'"{measure}" not a supported measure for faiss')
            faiss_index.add(h)
        self.faiss_index = faiss_index

    def find_nearest_from_hashes(self, h, n=100):
        if isinstance(h, torch.Tensor):
            h = h.numpy().astype('float32')
        scores, ix = self.faiss_index.search(h, n)
        ids = [[self.index[i] for i in sub] for sub in ix]
        return [{'scores': s.tolist(), 'ix': i.tolist(), '_ids': _id}
                for s, i, _id in zip(scores, ix, ids)]
