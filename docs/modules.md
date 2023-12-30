[@crushers-lab/distributed-lru-cache](README.md) / Exports

# @crushers-lab/distributed-lru-cache

## Table of contents

### Classes

- [EmptyBackend](classes/EmptyBackend.md)
- [RedisBackend](classes/RedisBackend.md)
- [default](classes/default.md)

### Interfaces

- [IBackend](interfaces/IBackend.md)
- [IBackendOptions](interfaces/IBackendOptions.md)
- [ICompressionAlgorithm](interfaces/ICompressionAlgorithm.md)
- [ICompressionOptions](interfaces/ICompressionOptions.md)

### Type Aliases

- [CacheOptions](modules.md#cacheoptions)
- [ICacheOptions](modules.md#icacheoptions)

## Type Aliases

### CacheOptions

Ƭ **CacheOptions**<`K`, `V`\>: `LRUCacheBase.Options`<`K`, `V`\> & [`ICacheOptions`](modules.md#icacheoptions)<`K`, `V`\>

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Defined in

src/interfaces.ts:41

___

### ICacheOptions

Ƭ **ICacheOptions**<`K`, `V`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `backend` | [`IBackendOptions`](interfaces/IBackendOptions.md)<`K`, `V`\> |
| `compression?` | [`ICompressionOptions`](interfaces/ICompressionOptions.md) \| `boolean` |

#### Defined in

src/interfaces.ts:36
