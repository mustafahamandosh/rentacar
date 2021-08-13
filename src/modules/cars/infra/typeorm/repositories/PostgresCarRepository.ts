import { getRepository, Repository } from 'typeorm';

import { ICreateUserDTO } from 'dto/ICreateUserDTO';
import { Car } from 'models/Car';
import { ICarRepository } from 'repository-interface/ICarRepository';

export class PostgresCarRepository implements ICarRepository {
    private repository: Repository<Car>;

    constructor() {
        this.repository = getRepository(Car);
    }

    async create({
        name,
        description,
        brand,
        daily_rate,
        fine_amount,
        license_plate,
        category_id,
    }: ICreateUserDTO): Promise<Car> {
        const car = this.repository.create({
            name,
            description,
            brand,
            daily_rate,
            fine_amount,
            license_plate,
            category_id,
        });
        await this.repository.save(car);
        return car;
    }

    async findByLicensePlat(license_plate: string): Promise<Car | undefined> {
        return await this.repository.findOne({ license_plate });
    }
}
