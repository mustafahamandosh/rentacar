import { container } from 'tsyringe';

import { Request, Response } from 'express';

import { ImportCategoryUseCase } from './ImportCategoryUseCase';

export class ImportCategoryController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { file } = req;
        const importCategoryUseCase = container.resolve(ImportCategoryUseCase);
        if (file) {
            await importCategoryUseCase.execute(file);
        }
        return res.status(201).send();
    }
}
