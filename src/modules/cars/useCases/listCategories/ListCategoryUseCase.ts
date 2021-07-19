import { Category } from '../../model/Category';
import { CategoryRepository } from '../../repositories/CategoryRepository';

export class ListCategoryUseCase {
    constructor(private categoryRepository: CategoryRepository) {}

    execute(): Category[] {
        return this.categoryRepository.list();
    }
}
