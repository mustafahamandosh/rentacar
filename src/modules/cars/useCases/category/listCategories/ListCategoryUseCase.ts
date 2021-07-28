import { inject, injectable } from 'tsyringe';

import { Category } from 'models/Category';
import { ICategoryRepository } from 'repository-interface/ICategoryRepository';

@injectable()
export class ListCategoryUseCase {
    constructor(
        @inject('PostgresCategoryRepository')
        private categoryRepository: ICategoryRepository,
    ) {}

    async execute(): Promise<Category[]> {
        return await this.categoryRepository.list();
    }
}
