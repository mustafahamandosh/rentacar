import { Category } from '../../model/Category';
import { CategoryRepository } from '../../repositories/implementations/CategoryRepository';

export class ListCategoryUseCase {
    constructor(private categoryRepository: CategoryRepository) {}

    execute(): Category[] {
        return this.categoryRepository.list();
    }
}
