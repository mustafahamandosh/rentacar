import { Request, Response } from 'express';

import { ListSpecificationUseCase } from './ListSpecificationUseCase';

export class ListSpecificationsController {
    constructor(private listSpecificationUseCase: ListSpecificationUseCase) {}

    handle(req: Request, res: Response): Response {
        return res
            .status(200)
            .json({ specifications: this.listSpecificationUseCase.execute() });
    }
}
