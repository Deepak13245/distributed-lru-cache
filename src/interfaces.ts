import LRUCacheBase from 'lru-cache';

export interface IBackend {
    get (key: string): Promise<string>;

    set (key: string, value: string): Promise<void>;

    del (key: string): Promise<void>;

    has (key: string): Promise<boolean>;

    onExpire: (callback: (key: string) => void) => Promise<void>;

    disconnect: () => Promise<void>;
}

export interface IBackendOptions<K, V> {
    client: IBackend;
    keyParser?: (key: string) => K;
    valueParser?: (value: string) => V;
    keySerializer?: (key: K) => string;
    valueSerializer?: (value: V) => string;
    expiryListener?: boolean;
}

export interface ICompressionAlgorithm {
    compress: (value: string) => Promise<string>;
    decompress: (value: string) => Promise<string>;
}

export interface ICompressionOptions {
    enabled?: boolean;
    algorithm: ICompressionAlgorithm;
}

export type ICacheOptions<K, V> =  {
    backend: IBackendOptions<K, V>;
    compression?: ICompressionOptions | boolean;
};

export type CacheOptions<K, V> = LRUCacheBase.Options<K, V> & ICacheOptions<K, V>;
