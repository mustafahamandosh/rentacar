import { Request, Response } from 'express';

import { ListCategoryUseCase } from './ListCategoryUseCase';

export class ListCategoryController {
    constructor(private listCategoryUseCase: ListCategoryUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        return res.json({
            categories: await this.listCategoryUseCase.execute(),
        });
    }
}
