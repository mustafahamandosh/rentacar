import { PostgresCategoryRepository } from '../../../repositories/implementations/PostgresCategoryRepository';
import { ImportCategoryController } from './ImportCategoryController';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

export default (): ImportCategoryController => {
    const categoryRepository = new PostgresCategoryRepository();
    const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository);
    return new ImportCategoryController(importCategoryUseCase);
};
