[@crushers-lab/distributed-lru-cache](../README.md) / [Exports](../modules.md) / IBackendOptions

# Interface: IBackendOptions<K, V\>

## Type parameters

| Name |
| :------ |
| `K` |
| `V` |

## Table of contents

### Properties

- [client](IBackendOptions.md#client)
- [expiryListener](IBackendOptions.md#expirylistener)
- [keyParser](IBackendOptions.md#keyparser)
- [keySerializer](IBackendOptions.md#keyserializer)
- [valueParser](IBackendOptions.md#valueparser)
- [valueSerializer](IBackendOptions.md#valueserializer)

## Properties

### client

• **client**: [`IBackend`](IBackend.md)

#### Defined in

src/interfaces.ts:18

___

### expiryListener

• `Optional` **expiryListener**: `boolean`

#### Defined in

src/interfaces.ts:23

___

### keyParser

• `Optional` **keyParser**: (`key`: `string`) => `K`

#### Type declaration

▸ (`key`): `K`

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

##### Returns

`K`

#### Defined in

src/interfaces.ts:19

___

### keySerializer

• `Optional` **keySerializer**: (`key`: `K`) => `string`

#### Type declaration

▸ (`key`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

##### Returns

`string`

#### Defined in

src/interfaces.ts:21

___

### valueParser

• `Optional` **valueParser**: (`value`: `string`) => `V`

#### Type declaration

▸ (`value`): `V`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

##### Returns

`V`

#### Defined in

src/interfaces.ts:20

___

### valueSerializer

• `Optional` **valueSerializer**: (`value`: `V`) => `string`

#### Type declaration

▸ (`value`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `V` |

##### Returns

`string`

#### Defined in

src/interfaces.ts:22
