import { ICreateCarDto } from 'dto/ICreateCarDto';
import { Car } from 'models/Car';
import { ICarRepository } from 'repository-interface/ICarRepository';

export class CarRepositoryInMemory implements ICarRepository {
    cars: Car[] = [];

    async create({
        name,
        description,
        brand,
        daily_rate,
        fine_amount,
        license_plate,
        category_id,
        specifications,
        id,
    }: ICreateCarDto): Promise<Car> {
        const car = new Car();
        Object.assign(car, {
            name,
            description,
            brand,
            daily_rate,
            fine_amount,
            license_plate,
            category_id,
            specifications,
            id,
        });
        this.cars.push(car);
        return car;
    }

    async findByLicensePlat(license_plate: string): Promise<Car | undefined> {
        return this.cars.find((car) => car.license_plate === license_plate);
    }

    async listAvailableCars(
        brand?: string,
        category_id?: string,
        name?: string,
    ): Promise<Car[] | undefined> {
        const availableCars = this.cars.filter(({ available }) => available);
        const queryCars = availableCars.filter(
            (car) =>
                (name && car.name === name) ||
                (brand && car.brand === brand) ||
                (category_id && car.category_id === category_id),
        );
        return queryCars.length ? queryCars : availableCars;
    }

    async findById(card_id: string): Promise<Car | undefined> {
        return await this.cars.find(({ id }) => id === card_id);
    }
}
