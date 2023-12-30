import {IBackend} from 'interfaces';
import {RedisClientType} from 'redis';

type IEventCallback = (key: string) => void;

export type RedisOptions = {
    database?: number;
    ttl?: number;
    prefix?: string;
};

class RedisBackend implements IBackend {
    private subscribed = false;
    private expireCallbacks: IEventCallback[] = [];
    private subscriber: RedisClientType;

    constructor (private client: RedisClientType, private options: RedisOptions = {}) {
        this.subscriber = client.duplicate();
    }

    private getCallbacks (channel: string): IEventCallback[] {
        if (channel.endsWith('expired') || channel.endsWith('evicted') || channel.endsWith('del')) {
            return this.expireCallbacks;
        }
        return [];
    }

    private getEventName (key: string) {
        return `__keyevent@${this.options.database || 0}__:${key}`;
    }

    private async subscribe (): Promise<void> {
        if (!this.subscribed) {
            await this.subscriber.connect();
            await this.subscriber.subscribe(['del', 'evicted', 'expired'].map((key) => this.getEventName(key)), (key, channel) => {
                if (this.options.prefix && !key.startsWith(this.options.prefix)) {
                    return;
                }
                const newKey = this.removePrefix(key);
                this.getCallbacks(channel).forEach((callback) => {
                    callback(newKey);
                });
            });
            this.subscribed = true;
        }
    }

    async onExpire (callback: IEventCallback): Promise<void> {
        this.expireCallbacks.push(callback);
        await this.subscribe();
    }

    private getKey (key: string): string {
        return this.options.prefix ? `${this.options.prefix}:${key}` : key;
    }

    private removePrefix (key: string) {
        return this.options.prefix ? key.replace(`${this.options.prefix}:`, '') : key;
    }

    async del (key: string): Promise<void> {
        await this.client.del(this.getKey(key));
    }

    async get (key: string): Promise<string> {
        return this.client.get(this.getKey(key));
    }

    async has (key: string): Promise<boolean> {
        const exists = await this.client.exists(this.getKey(key));
        return exists === 1;
    }

    async set (key: string, value: string): Promise<void> {
        await this.client.set(this.getKey(key), value, {
            PX: this.options.ttl,
        });
    }

    async disconnect (): Promise<void> {
        if (this.subscribed) {
            await this.subscriber.disconnect();
            this.subscribed = false;
        }
    }
}

export default RedisBackend;
