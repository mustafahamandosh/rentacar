import { CarRepositoryInMemory } from 'repository-interface/in-memory/CarRepositoryInMemory';
import { ListAvailableCarUseCase } from 'usecases/car/listAvaialbeCars/ListAvailableCarUseCase';

let listCarUseCase: ListAvailableCarUseCase;
let carRepository: CarRepositoryInMemory;

describe('List cars', () => {
    beforeEach(() => {
        carRepository = new CarRepositoryInMemory();
        listCarUseCase = new ListAvailableCarUseCase(carRepository);
    });
    it('should be able to list all available cars', async () => {
        await carRepository.create({
            name: 'model Y',
            description: 'Great car',
            brand: 'Tesla',
            daily_rate: 300,
            fine_amount: 60,
            license_plate: 'ABC-12',
            category_id: 'category_id',
        });
        const cars = await listCarUseCase.execute({});
        expect(cars?.length).toBeGreaterThan(0);
    });

    it('should be able to list all available cars by name', async () => {
        await carRepository.create({
            name: 'model S',
            description: 'Great car',
            brand: 'Tesla',
            daily_rate: 300,
            fine_amount: 60,
            license_plate: 'ABC-12',
            category_id: 'category_id',
        });
        const cars = await listCarUseCase.execute({ name: 'test' });
        console.log(cars);
        expect(cars?.length).toBeGreaterThan(0);
    });

    it('should be able to list all available cars by brand', async () => {
        const car = await carRepository.create({
            name: 'model S',
            description: 'Great car',
            brand: 'Tesla',
            daily_rate: 300,
            fine_amount: 60,
            license_plate: 'ABC-12',
            category_id: 'category_id',
        });
        const cars = await listCarUseCase.execute({ brand: car.brand });
        expect(cars?.length).toBeGreaterThan(0);
    });

    it('should be able to list all available cars by category_id', async () => {
        const car = await carRepository.create({
            name: 'model S',
            description: 'Great car',
            brand: 'Tesla',
            daily_rate: 300,
            fine_amount: 60,
            license_plate: 'ABC-12',
            category_id: 'category_id',
        });
        const cars = await listCarUseCase.execute({
            category_id: car.category_id,
        });
        expect(cars?.length).toBeGreaterThan(0);
    });
});
