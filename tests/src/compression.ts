import {createClient, RedisClientType} from 'redis';
import LRUCache, {RedisBackend} from '../../src';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

describe('basic test on compression', () => {
    let client: RedisClientType = null;
    let cache: LRUCache<string, string> = null;

    beforeAll(async () => {
        client = createClient({
            url: 'redis://localhost:6379',
            password: '',
            database: 10,
        });
        await client.connect();
        cache = await LRUCache.create<string, string>({
            backend: {
                client: new RedisBackend(client, {
                    prefix: 'test',
                    ttl: 10000,
                    database: 10,
                }),
                expiryListener: true,
            },
            compression: true,
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
        await expect(cache.set('test2', 'test')).resolves.toBeUndefined();
        expect(localCache.has('test2')).toBeTruthy();
        await expect(cache.get('test2')).resolves.toBe('test');
        expect(localCache.get('test2')).toBe('test');
        localCache.delete('test2');
        expect(localCache.has('test2')).toBeFalsy();
        await expect(cache.get('test2')).resolves.toBe('test');
        await client.del('test:test2');
        await sleep(200);
        expect(localCache.has('test2')).toBeFalsy();
    });
});
