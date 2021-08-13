import { ICreateUserDTO } from 'dto/ICreateUserDTO';
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
    }: ICreateUserDTO): Promise<Car>;

    findByLicensePlat(license_plate: string): Promise<Car | undefined>;
}
