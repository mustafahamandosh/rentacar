import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../../errors/AppError';

import { ICategoryRepository } from 'repository-interface/ICategoryRepository';

interface IRequest {
    name: string;
    description: string;
}

@injectable()
export class CreateCategoryUseCase {
    constructor(
        @inject('PostgresCategoryRepository')
        private categoryRepository: ICategoryRepository,
    ) {}

    async execute({ name, description }: IRequest): Promise<void> {
        const categoryExists = await this.categoryRepository.findByName(name);
        if (categoryExists) {
            throw new AppError('Category already exists!');
        }
        await this.categoryRepository.create({ name, description });
    }
}
