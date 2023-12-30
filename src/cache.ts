import LRUCacheBase from 'lru-cache';
import {CacheOptions, IBackend, IBackendOptions, ICompressionOptions} from './interfaces';
import {defaultCompressor} from './compression';


class LRUCache<K, V> {
    private backend: IBackend;
    private readonly cache: LRUCacheBase<K, V>;
    private readonly options: IBackendOptions<K, V>;
    private readonly compressionOptions: ICompressionOptions | boolean;

    constructor (options: CacheOptions<K, V>) {
        this.cache = new LRUCacheBase(options);
        this.backend = options.backend.client;
        this.options = options.backend;
        this.compressionOptions = options.compression;
    }

    static async create<K, V> (options: CacheOptions<K, V>): Promise<LRUCache<K, V>> {
        const cache = new LRUCache(options);
        await cache.init();
        return cache;
    }

    async init (): Promise<void> {
        if (this.options.expiryListener) {
            await this.backend.onExpire((key) => {
                this.cache.delete(this.parseKey(key));
            });
        }
    }

    getLocalCache (): LRUCacheBase<K, V> {
        return this.cache;
    }

    async disconnect (): Promise<void> {
        await this.backend.disconnect();
        this.cache.clear();
    }

    private parseKey (key: string): K {
        if (this.options.keyParser) {
            return this.options.keyParser(key);
        }
        return key as K;
    }

    private parseValue (value: string): V {
        if (this.options.valueParser) {
            return this.options.valueParser(value);
        }
        return value as V;
    }

    private serializeKey (key: K): string {
        if (this.options.keySerializer) {
            return this.options.keySerializer(key);
        }
        return key.toString();
    }

    private serializeValue (value: V): string {
        if (this.options.valueSerializer) {
            return this.options.valueSerializer(value);
        }
        return value.toString();
    }

    private shouldCompress (): boolean {
        if (this.compressionOptions === undefined) {
            return false;
        }
        if (this.compressionOptions === true) {
            return true;
        }
        if (this.compressionOptions === false) {
            return false;
        }
        const options = this.compressionOptions;
        return options.enabled;
    }

    private compress (value: string): Promise<string> {
        if (this.compressionOptions === true) {
            return defaultCompressor.compress(value);
        }
        if (this.compressionOptions === false) {
            return Promise.resolve(value);
        }
        const algorithm = (this.compressionOptions).algorithm;
        return algorithm.compress(value);
    }

    private decompress (value: string): Promise<string> {
        if (this.compressionOptions === true) {
            return defaultCompressor.decompress(value);
        }
        if (this.compressionOptions === false) {
            return Promise.resolve(value);
        }
        const algorithm = (this.compressionOptions).algorithm;
        return algorithm.decompress(value);
    }

    async get (key: K): Promise<V | undefined> {
        if (this.cache.has(key)) {
            return this.cache.get(key);
        }

        let raw = await this.backend.get(this.serializeKey(key));

        if (this.shouldCompress()) {
            raw = await this.decompress(raw);
        }

        const value = this.parseValue(raw);

        if (value) {
            this.cache.set(key, value);
        }

        return value;
    }

    async set (key: K, value: V): Promise<void> {
        let compressed = this.serializeValue(value);
        if (this.shouldCompress()) {
            compressed = await this.compress(compressed);
        }
        this.cache.set(key, value);
        await this.backend.set(this.serializeKey(key), compressed);
    }

    async del (key: K): Promise<void> {
        this.cache.delete(key);
        await this.backend.del(this.serializeKey(key));
    }

    async has (key: K): Promise<boolean> {
        return this.cache.has(key) || await this.backend.has(this.serializeKey(key));
    }
}

export default LRUCache;
