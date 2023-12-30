import {createClient, RedisClientType} from 'redis';
import LRUCache, {RedisBackend} from '../../src';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

describe('basic test on strings', () => {
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
        await expect(cache.set('test1', 'test')).resolves.toBeUndefined();
        expect(localCache.has('test1')).toBeTruthy();
        await expect(cache.get('test1')).resolves.toBe('test');
        expect(localCache.get('test1')).toBe('test');
        await client.del('test:test1');
        await sleep(200);
        expect(localCache.has('test1')).toBeFalsy();
    });
});
