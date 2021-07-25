import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListCategoryUseCase } from './ListCategoryUseCase';

export class ListCategoryController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listCategoryUseCase = container.resolve(ListCategoryUseCase);
        return res.json({
            categories: await listCategoryUseCase.execute(),
        });
    }
}
