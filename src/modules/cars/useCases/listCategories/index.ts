import { CategoryRepository } from '../../repositories/implementations/CategoryRepository';
import { ListCategoryController } from './ListCategoryController';
import { ListCategoryUseCase } from './ListCategoryUseCase';

const categoryRepository = CategoryRepository.getInstance();
const listCategoryUseCase = new ListCategoryUseCase(categoryRepository);
export const listCategoryController = new ListCategoryController(
    listCategoryUseCase,
);
