import { Request, Response } from 'express';

import { CreateSpecificationsUseCase } from './CreateSpecificationsUseCase';

export class CreateSpecificationController {
    constructor(
        private createSpecificationsUseCase: CreateSpecificationsUseCase,
    ) {}

    handle(req: Request, res: Response): Response {
        const { name, description } = req.body;
        this.createSpecificationsUseCase.execute({ name, description });
        return res.status(201).send();
    }
}
