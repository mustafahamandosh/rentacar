import { inject, injectable } from 'tsyringe';

import { Car } from 'models/Car';
import { ICarRepository } from 'repository-interface/ICarRepository';

interface IRequest {
    name: string;
    description: string;
    daily_rate: number;
    license_plate: string;
    fine_amount: number;
    brand: string;
    category_id: string;
}

@injectable()
export class CreateCarUseCase {
    constructor(
        @inject('PostgresCarRepository') private carRepository: ICarRepository,
    ) {}

    async execute({
        name,
        description,
        brand,
        daily_rate,
        fine_amount,
        license_plate,
        category_id,
    }: IRequest): Promise<Car> {
        const isLicensePlateExist = await this.carRepository.findByLicensePlat(
            license_plate,
        );

        if (isLicensePlateExist) {
            throw new Error('License plate already exists');
        }

        return await this.carRepository.create({
            name,
            description,
            brand,
            daily_rate,
            fine_amount,
            license_plate,
            category_id,
        });
    }
}
