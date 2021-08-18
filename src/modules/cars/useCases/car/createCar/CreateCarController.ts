import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateCarUseCase } from 'usecases/car/createCar/CreateCarUseCase';

export class CreateCarController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {
            name,
            description,
            brand,
            daily_rate,
            fine_amount,
            license_plate,
            category_id,
        } = req.body;
        const createCarUseCase = container.resolve(CreateCarUseCase);
        const car = await createCarUseCase.execute({
            name,
            description,
            brand,
            daily_rate,
            fine_amount,
            license_plate,
            category_id,
        });
        return res.status(201).json(car);
    }
}
