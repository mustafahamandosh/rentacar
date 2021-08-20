import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListAvailableCarUseCase } from 'usecases/car/listAvaialbeCars/ListAvailableCarUseCase';

export class ListAvailableCarsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { brand, name, category_id } = req.query;
        const listAvailableCarUseCase = container.resolve(
            ListAvailableCarUseCase,
        );
        const cars = await listAvailableCarUseCase.execute({
            category_id: category_id as string,
            name: name as string,
            brand: brand as string,
        });
        return res.json(cars);
    }
}
