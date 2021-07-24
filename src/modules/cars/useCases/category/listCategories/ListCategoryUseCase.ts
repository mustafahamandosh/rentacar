import { Category } from '../../../model/Category';
import { ICategoryRepository } from '../../../repositories/ICategoryRepository';

export class ListCategoryUseCase {
    constructor(private categoryRepository: ICategoryRepository) {}

    async execute(): Promise<Category[]> {
        return await this.categoryRepository.list();
    }
}
