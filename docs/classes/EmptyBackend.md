[@crushers-lab/distributed-lru-cache](../README.md) / [Exports](../modules.md) / EmptyBackend

# Class: EmptyBackend

## Implements

- [`IBackend`](../interfaces/IBackend.md)

## Table of contents

### Constructors

- [constructor](EmptyBackend.md#constructor)

### Methods

- [del](EmptyBackend.md#del)
- [disconnect](EmptyBackend.md#disconnect)
- [get](EmptyBackend.md#get)
- [has](EmptyBackend.md#has)
- [onExpire](EmptyBackend.md#onexpire)
- [set](EmptyBackend.md#set)

## Constructors

### constructor

• **new EmptyBackend**()

## Methods

### del

▸ **del**(`key`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IBackend](../interfaces/IBackend.md).[del](../interfaces/IBackend.md#del)

#### Defined in

src/backends/empty/index.ts:5

___

### disconnect

▸ **disconnect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

IBackend.disconnect

#### Defined in

src/backends/empty/index.ts:25

___

### get

▸ **get**(`key`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<`string`\>

#### Implementation of

[IBackend](../interfaces/IBackend.md).[get](../interfaces/IBackend.md#get)

#### Defined in

src/backends/empty/index.ts:9

___

### has

▸ **has**(`key`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Implementation of

[IBackend](../interfaces/IBackend.md).[has](../interfaces/IBackend.md#has)

#### Defined in

src/backends/empty/index.ts:13

___

### onExpire

▸ **onExpire**(`callback`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`key`: `string`) => `void` |

#### Returns

`Promise`<`void`\>

#### Implementation of

IBackend.onExpire

#### Defined in

src/backends/empty/index.ts:21

___

### set

▸ **set**(`key`, `value`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IBackend](../interfaces/IBackend.md).[set](../interfaces/IBackend.md#set)

#### Defined in

src/backends/empty/index.ts:17
