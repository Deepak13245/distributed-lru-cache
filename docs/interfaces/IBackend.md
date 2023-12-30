[@crushers-lab/distributed-lru-cache](../README.md) / [Exports](../modules.md) / IBackend

# Interface: IBackend

## Implemented by

- [`EmptyBackend`](../classes/EmptyBackend.md)
- [`RedisBackend`](../classes/RedisBackend.md)

## Table of contents

### Properties

- [disconnect](IBackend.md#disconnect)
- [onExpire](IBackend.md#onexpire)

### Methods

- [del](IBackend.md#del)
- [get](IBackend.md#get)
- [has](IBackend.md#has)
- [set](IBackend.md#set)

## Properties

### disconnect

• **disconnect**: () => `Promise`<`void`\>

#### Type declaration

▸ (): `Promise`<`void`\>

##### Returns

`Promise`<`void`\>

#### Defined in

src/interfaces.ts:14

___

### onExpire

• **onExpire**: (`callback`: (`key`: `string`) => `void`) => `Promise`<`void`\>

#### Type declaration

▸ (`callback`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`key`: `string`) => `void` |

##### Returns

`Promise`<`void`\>

#### Defined in

src/interfaces.ts:12

## Methods

### del

▸ **del**(`key`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

src/interfaces.ts:8

___

### get

▸ **get**(`key`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

src/interfaces.ts:4

___

### has

▸ **has**(`key`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

src/interfaces.ts:10

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

#### Defined in

src/interfaces.ts:6
