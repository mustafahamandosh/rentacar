import { CarRepositoryInMemory } from 'repository-interface/in-memory/CarRepositoryInMemory';
import { CreateCarUseCase } from 'usecases/car/CreateCarUseCase';

let createCarUseCase: CreateCarUseCase;
let carRepositoryInMemory: CarRepositoryInMemory;

describe('Create car', () => {
    beforeEach(() => {
        carRepositoryInMemory = new CarRepositoryInMemory();
        createCarUseCase = new CreateCarUseCase(carRepositoryInMemory);
    });

    it('should be able to add a new car', async () => {
        await createCarUseCase.execute({
            name: 'model Y',
            description: 'Great car',
            brand: 'Tesla',
            daily_rate: 300,
            fine_amount: 60,
            license_plate: 'ABC-12',
            category_id: 'category',
        });
    });

    it('should not be able to add a new car if license plate exists', async () => {
        await expect(async () => {
            await createCarUseCase.execute({
                name: 'model Y',
                description: 'Great car',
                brand: 'Tesla',
                daily_rate: 300,
                fine_amount: 60,
                license_plate: 'ABC-12',
                category_id: 'category',
            });

            await createCarUseCase.execute({
                name: 'model X',
                description: 'Great car',
                brand: 'Tesla',
                daily_rate: 300,
                fine_amount: 60,
                license_plate: 'ABC-12',
                category_id: 'category',
            });
        }).rejects.toThrow('License plate already exists');
    });

    it('should be able to add a new car if available property is true by default', async () => {
        const car = await createCarUseCase.execute({
            name: 'model Y',
            description: 'Great car',
            brand: 'Tesla',
            daily_rate: 300,
            fine_amount: 60,
            license_plate: 'ABC-12',
            category_id: 'category',
        });
        expect(car.available).toBe(true);
    });
});
