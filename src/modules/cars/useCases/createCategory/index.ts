import { CategoryRepository } from '../../repositories/implementations/CategoryRepository';
import { CreateCategoryController } from './CreateCategoryController';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

const categoryRepository = CategoryRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);
export const createCategoryController = new CreateCategoryController(
    createCategoryUseCase,
);
