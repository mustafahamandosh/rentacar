import { PostgresCategoryRepository } from '../../../repositories/implementations/PostgresCategoryRepository';
import { ListCategoryController } from './ListCategoryController';
import { ListCategoryUseCase } from './ListCategoryUseCase';

export default (): ListCategoryController => {
    const categoryRepository = new PostgresCategoryRepository();
    const listCategoryUseCase = new ListCategoryUseCase(categoryRepository);
    return new ListCategoryController(listCategoryUseCase);
};
