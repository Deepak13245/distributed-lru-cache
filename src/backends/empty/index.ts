/* eslint-disable @typescript-eslint/no-unused-vars */
import {IBackend} from 'interfaces';

class EmptyBackend implements IBackend {
    del (key: string): Promise<void> {
        return Promise.resolve();
    }

    get (key: string): Promise<string> {
        return Promise.resolve('');
    }

    has (key: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    set (key: string, value: string): Promise<void> {
        return Promise.resolve();
    }

    onExpire (callback: (key: string) => void): Promise<void> {
        return Promise.resolve();
    }

    disconnect (): Promise<void> {
        return Promise.resolve();
    }
}

export default EmptyBackend;
