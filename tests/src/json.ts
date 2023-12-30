import {createClient, RedisClientType} from 'redis';
import LRUCache, {CacheOptions, RedisBackend} from '../../src';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

describe('basic test on json', () => {
    let client: RedisClientType = null;
    let cache: LRUCache<string, any> = null;

    beforeAll(async () => {
        client = createClient({
            url: 'redis://localhost:6379',
            password: '',
            database: 10,
        });
        await client.connect();
        cache = await LRUCache.create<string, any>({
            backend: {
                client: new RedisBackend(client, {
                    prefix: 'test',
                    ttl: 10000,
                    database: 10,
                }),
                expiryListener: true,
                valueParser: (value) => JSON.parse(value),
                valueSerializer: (value) => JSON.stringify(value),
            },
            ttl: 100000,
            max: 100,
        });
    });

    afterAll(async () => {
        await cache.disconnect();
        await client.disconnect();
    });

    it('should be able to create instance', async () => {
        expect(cache).toBeDefined();
        const localCache = cache.getLocalCache();
        const obj = {
            test: 'test',
        };
        await expect(cache.set('test', obj)).resolves.toBeUndefined();
        expect(localCache.has('test')).toBeTruthy();
        await expect(cache.get('test')).resolves.toMatchObject(obj);
        expect(localCache.get('test')).toMatchObject(obj);
        localCache.delete('test');
        expect(localCache.has('test')).toBeFalsy();
        await expect(cache.get('test')).resolves.toMatchObject(obj);
        expect(localCache.has('test')).toBeTruthy();
        await client.del('test:test');
        await sleep(200);
        expect(localCache.has('test')).toBeFalsy();
    });
});
