import { CarRepositoryInMemory } from 'repository-interface/in-memory/CarRepositoryInMemory';
import { SpecificationRepositoryInMemory } from 'repository-interface/in-memory/SpecificationRepositoryInMemory';
import { CreateCarSpecificationUseCase } from 'usecases/car/createCarSpecification/CreateCarSpecificationUseCase';

let carSpecificationUseCase: CreateCarSpecificationUseCase;
let specificationRepositoryInMemory: SpecificationRepositoryInMemory;
let carRepositoryInMemory: CarRepositoryInMemory;

describe('Create car specification', () => {
    beforeEach(() => {
        carRepositoryInMemory = new CarRepositoryInMemory();
        specificationRepositoryInMemory = new SpecificationRepositoryInMemory();
        carSpecificationUseCase = new CreateCarSpecificationUseCase(
            carRepositoryInMemory,
            specificationRepositoryInMemory,
        );
    });

    it('should be able to add a new specification to the car', async () => {
        const car = await carRepositoryInMemory.create({
            name: 'model Y',
            description: 'Great car',
            brand: 'Tesla',
            daily_rate: 300,
            fine_amount: 60,
            license_plate: 'ABC-12',
            category_id: 'category',
        });

        const specification = await specificationRepositoryInMemory.create({
            name: 'test',
            description: 'test desc',
        });
        const carSpecification = await carSpecificationUseCase.execute({
            car_id: car.id as string,
            specifications_id: [specification.id as string],
        });
        expect(carSpecification).toHaveProperty('specifications');
        expect(carSpecification.specifications.length).toBe(1);
    });

    it('should not be able to add a new specification to a non existent car', async () => {
        await expect(async () => {
            await carSpecificationUseCase.execute({
                car_id: '',
                specifications_id: [''],
            });
        }).rejects.toBeInstanceOf(Error);
    });
});
