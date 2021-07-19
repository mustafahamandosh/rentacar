import { Request, Response } from 'express';

import { ListCategoryUseCase } from './ListCategoryUseCase';

export class ListCategoryController {
    constructor(private listCategoryUseCase: ListCategoryUseCase) {}

    handle(req: Request, res: Response): Response {
        return res.json({ categories: this.listCategoryUseCase.execute() });
    }
}
