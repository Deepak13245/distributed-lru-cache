[@crushers-lab/distributed-lru-cache](../README.md) / [Exports](../modules.md) / default

# Class: default<K, V\>

## Type parameters

| Name |
| :------ |
| `K` |
| `V` |

## Table of contents

### Constructors

- [constructor](default.md#constructor)

### Properties

- [backend](default.md#backend)
- [cache](default.md#cache)
- [compressionOptions](default.md#compressionoptions)
- [options](default.md#options)

### Methods

- [compress](default.md#compress)
- [decompress](default.md#decompress)
- [del](default.md#del)
- [disconnect](default.md#disconnect)
- [get](default.md#get)
- [getLocalCache](default.md#getlocalcache)
- [has](default.md#has)
- [init](default.md#init)
- [parseKey](default.md#parsekey)
- [parseValue](default.md#parsevalue)
- [serializeKey](default.md#serializekey)
- [serializeValue](default.md#serializevalue)
- [set](default.md#set)
- [shouldCompress](default.md#shouldcompress)
- [create](default.md#create)

## Constructors

### constructor

• **new default**<`K`, `V`\>(`options`)

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`CacheOptions`](../modules.md#cacheoptions)<`K`, `V`\> |

#### Defined in

src/cache.ts:12

## Properties

### backend

• `Private` **backend**: [`IBackend`](../interfaces/IBackend.md)

#### Defined in

src/cache.ts:7

___

### cache

• `Private` `Readonly` **cache**: `LRUCache`<`K`, `V`\>

#### Defined in

src/cache.ts:8

___

### compressionOptions

• `Private` `Readonly` **compressionOptions**: `boolean` \| [`ICompressionOptions`](../interfaces/ICompressionOptions.md)

#### Defined in

src/cache.ts:10

___

### options

• `Private` `Readonly` **options**: [`IBackendOptions`](../interfaces/IBackendOptions.md)<`K`, `V`\>

#### Defined in

src/cache.ts:9

## Methods

### compress

▸ `Private` **compress**(`value`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

src/cache.ts:84

___

### decompress

▸ `Private` **decompress**(`value`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

src/cache.ts:95

___

### del

▸ **del**(`key`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`Promise`<`void`\>

#### Defined in

src/cache.ts:135

___

### disconnect

▸ **disconnect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

src/cache.ts:37

___

### get

▸ **get**(`key`): `Promise`<`V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`Promise`<`V`\>

#### Defined in

src/cache.ts:106

___

### getLocalCache

▸ **getLocalCache**(): `LRUCache`<`K`, `V`\>

#### Returns

`LRUCache`<`K`, `V`\>

#### Defined in

src/cache.ts:33

___

### has

▸ **has**(`key`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

src/cache.ts:140

___

### init

▸ **init**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

src/cache.ts:25

___

### parseKey

▸ `Private` **parseKey**(`key`): `K`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`K`

#### Defined in

src/cache.ts:42

___

### parseValue

▸ `Private` **parseValue**(`value`): `V`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`V`

#### Defined in

src/cache.ts:49

___

### serializeKey

▸ `Private` **serializeKey**(`key`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`string`

#### Defined in

src/cache.ts:56

___

### serializeValue

▸ `Private` **serializeValue**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `V` |

#### Returns

`string`

#### Defined in

src/cache.ts:63

___

### set

▸ **set**(`key`, `value`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `V` |

#### Returns

`Promise`<`void`\>

#### Defined in

src/cache.ts:126

___

### shouldCompress

▸ `Private` **shouldCompress**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/cache.ts:70

___

### create

▸ `Static` **create**<`K`, `V`\>(`options`): `Promise`<[`default`](default.md)<`K`, `V`\>\>

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`CacheOptions`](../modules.md#cacheoptions)<`K`, `V`\> |

#### Returns

`Promise`<[`default`](default.md)<`K`, `V`\>\>

#### Defined in

src/cache.ts:19
