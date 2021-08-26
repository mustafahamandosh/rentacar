import 'reflect-metadata';
import '../container';
import 'express-async-errors';

import cors from 'cors';
import express, { Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';

import { AppError } from 'errors/AppError';

import { router } from './http/routes';
import createConnection from './typeorm';

import swaggerFile from '../../swagger.json';

createConnection().then();

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(cors());
app.use(router);

app.use((error: Error, req: Request, res: Response) => {
    if (error instanceof AppError) {
        return res
            .status(error.statusCode)
            .json({ status: 'error', message: error.message });
    }

    return res.status(500).json({
        status: 'error',
        message: `Internal server error - ${error.message}`,
    });
});

app.listen(3333, () => {
    console.log('Server is running');
});
