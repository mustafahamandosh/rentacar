import { inject, injectable } from 'tsyringe';

import { Category } from '../../../model/Category';
import { ICategoryRepository } from '../../../repositories/ICategoryRepository';

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
