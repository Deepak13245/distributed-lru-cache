@crushers-lab/distributed-lru-cache / [Exports](modules.md)

# Distributed LRU Cache

Library for all distributed in memory cache needs

## Supported Backends

- [x] Redis

## Supported Functions

- [x] Get
- [x] Set
- [x] Has
- [x] Del

## Installation

`yarn add @crushers-lab/distributed-lru-cache`

OR

`npm i @crushers-lab/distributed-lru-cache`

## Basic Usage

```javascript
import LRUCache, {RedisBackend} from '@crushers-lab/distributed-lru-cache';
import {createClient} from 'redis';

const client = createClient({
    url: 'redis://localhost:6379',
});

const cache = await LRUCache.create({
    ttl: 60000,
    backend: {
        client: new RedisBackend(client, {
            prefix: '',
            ttl: 10000,
            database: 10,
        }),
        expiryListener: true,
    },
});

await cache.set('key', 'value');
const value = await cache.get('key');
const exists = await cache.has('key');
await cache.del('key');
```

[Read More](docs/modules.md)

---
