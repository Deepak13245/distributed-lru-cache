import {createClient, RedisClientType} from 'redis';
import LRUCache, {RedisBackend} from '../../src';
import DefaultCompressor from '../../src/compression';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));


describe('basic test on compression custom class', () => {
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
            compression: {
                enabled: true,
                algorithm: new DefaultCompressor(),
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
        await expect(cache.set('test3', 'test')).resolves.toBeUndefined();
        expect(localCache.has('test3')).toBeTruthy();
        await expect(cache.get('test3')).resolves.toBe('test');
        expect(localCache.get('test3')).toBe('test');
        localCache.delete('test3');
        await expect(cache.get('test3')).resolves.toBe('test');
        await client.del('test:test3');
        await sleep(200);
        expect(localCache.has('test3')).toBeFalsy();
    });
});
