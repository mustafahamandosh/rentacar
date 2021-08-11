import * as crypto from 'crypto';
import { resolve } from 'path';

import multer from 'multer';

export default {
    upload(folder: string): { storage: multer.StorageEngine } {
        return {
            storage: multer.diskStorage({
                destination: resolve(__dirname, '..', '..', folder),
                filename(
                    req: Express.Request,
                    file: Express.Multer.File,
                    callback: (error: Error | null, filename: string) => void,
                ) {
                    const fileHash = crypto.randomBytes(16).toString('hex');
                    const fileName = `${fileHash}-${file.originalname}`;
                    return callback(null, fileName);
                },
            }),
        };
    },
};
