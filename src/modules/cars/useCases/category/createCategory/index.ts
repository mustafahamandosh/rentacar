import { PostgresCategoryRepository } from '../../../repositories/implementations/PostgresCategoryRepository';
import { CreateCategoryController } from './CreateCategoryController';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

const categoryRepository = new PostgresCategoryRepository();
const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);
export const createCategoryController = new CreateCategoryController(
    createCategoryUseCase,
);
