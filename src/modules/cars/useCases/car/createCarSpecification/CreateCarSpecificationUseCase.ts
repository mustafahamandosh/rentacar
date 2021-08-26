import { inject, injectable } from 'tsyringe';

import { AppError } from 'errors/AppError';
import { Car } from 'models/Car';
import { ICarRepository } from 'repository-interface/ICarRepository';
import { ISpecificationsRepository } from 'repository-interface/ISpecificationsRepository';

interface IRequest {
    car_id: string;
    specifications_id: string[];
}

@injectable()
export class CreateCarSpecificationUseCase {
    constructor(
        @inject('PostgresCarRepository')
        private carRepository: ICarRepository,
        @inject('PostgresSpecificationsRepository')
        private specificationsRepository: ISpecificationsRepository,
    ) {}

    async execute({ car_id, specifications_id }: IRequest): Promise<Car> {
        const car = await this.carRepository.findById(car_id);
        if (!car) {
            throw new AppError('Car doesnt exist!');
        }
        car.specifications = await this.specificationsRepository.findByIds(
            specifications_id,
        );
        return await this.carRepository.create(car);
    }
}
