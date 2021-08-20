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
        return this.cars.filter((car) => {
            if (
                car.available ||
                (brand && car.brand === brand) ||
                (category_id && car.category_id === category_id) ||
                (name && car.name === name)
            ) {
                return car;
            }
            return undefined;
        });
    }
}
