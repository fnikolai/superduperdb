from superduperdb.backends.ibis.field_types import dtype
from superduperdb.backends.ibis.query import IbisTable
from superduperdb.base.serializable import Serializable
from superduperdb.components.schema import Schema
from superduperdb.ext.pillow.encoder import pil_image


def test_serialize_table():
    schema = Schema(
        identifier='my_table',
        fields={
            'id': dtype('int64'),
            'health': dtype('int32'),
            'age': dtype('int32'),
            'image': pil_image,
        },
    )

    s = schema.serialize()
    print(s)
    ds = Serializable.deserialize(s)

    print(ds)

    t = IbisTable(identifier='my_table', schema=schema)

    s = t.serialize()
    ds = Serializable.deserialize(s)

    print(ds)
