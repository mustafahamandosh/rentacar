import 'reflect-metadata';
import './database';
import './shared/container';

import express, { Request, Response } from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';

import { AppError } from './errors/AppError';
import { router } from './routes';
import swaggerFile from './swagger.json';

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

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
