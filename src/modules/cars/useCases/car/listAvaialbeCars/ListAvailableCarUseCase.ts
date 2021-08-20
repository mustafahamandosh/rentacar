import { inject, injectable } from 'tsyringe';

import { Car } from 'models/Car';
import { ICarRepository } from 'repository-interface/ICarRepository';

interface IRequest {
    category_id?: string;
    brand?: string;
    name?: string;
}

@injectable()
export class ListAvailableCarUseCase {
    constructor(
        @inject('PostgresCarRepository') private carRepository: ICarRepository,
    ) {}

    async execute({
        category_id,
        name,
        brand,
    }: IRequest): Promise<Car[] | undefined> {
        return await this.carRepository.listAvailableCars(
            brand,
            category_id,
            name,
        );
    }
}
