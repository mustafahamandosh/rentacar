import { AppError } from '../../../../../errors/AppError';

import { CategoryRepositoryInMemory } from 'repository-interface/in-memory/CategoryRepositoryInMemory';
import { CreateCategoryUseCase } from 'usecases/category/createCategory/CreateCategoryUseCase';

let createCategoryUseCase: CreateCategoryUseCase;
let categoryRepository: CategoryRepositoryInMemory;

describe('Create category', () => {
    beforeEach(() => {
        categoryRepository = new CategoryRepositoryInMemory();
        createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);
    });

    it('should be able to create a new category', async () => {
        const category = {
            name: 'EV',
            description: 'Tesla',
        };
        await createCategoryUseCase.execute(category);
        const isCategoryCreated = await categoryRepository.findByName(
            category.name,
        );
        expect(isCategoryCreated).toHaveProperty('id');
    });

    it('should not be able category if category name already exist', () => {
        expect(async () => {
            const category = {
                name: 'EV',
                description: 'Tesla',
            };
            await createCategoryUseCase.execute(category);
            await createCategoryUseCase.execute(category);
        }).rejects.toBeInstanceOf(AppError);
    });
});
