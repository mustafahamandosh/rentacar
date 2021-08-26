import { ICreateCarDto } from 'dto/ICreateCarDto';
import { Car } from 'models/Car';

export interface ICarRepository {
    create({
        name,
        description,
        brand,
        daily_rate,
        fine_amount,
        license_plate,
        category_id,
    }: ICreateCarDto): Promise<Car>;

    findByLicensePlat(license_plate: string): Promise<Car | undefined>;

    listAvailableCars(
        brand?: string,
        category_id?: string,
        name?: string,
    ): Promise<Car[] | undefined>;

    findById(card_id: string): Promise<Car | undefined>;
}
