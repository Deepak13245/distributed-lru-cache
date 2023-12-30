import {ICompressionAlgorithm} from './interfaces';
import {gunzip, gzip} from 'zlib';

class DefaultCompressor implements ICompressionAlgorithm {
    async compress (data: string): Promise<string> {
        return new Promise((resolve, reject) => {
            gzip(data, {
                level: 5,
            }, (err, buffer) => {
                if (err) {
                    throw reject(err);
                }
                return resolve(buffer.toString('base64'));
            });
        });
    }

    async decompress (data: string): Promise<string> {
        return new Promise((resolve, reject) => {
            gunzip(Buffer.from(data,'base64'), {
                level: 5,
            }, (err, buffer) => {
                if (err) {
                    throw reject(err);
                }
                return resolve(buffer.toString());
            });
        });
    }
}

export const defaultCompressor = new DefaultCompressor();

export default DefaultCompressor;
