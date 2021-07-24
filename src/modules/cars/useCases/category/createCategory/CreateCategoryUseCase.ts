import { ICategoryRepository } from '../../../repositories/ICategoryRepository';

interface IRequest {
    name: string;
    description: string;
}

export class CreateCategoryUseCase {
    constructor(private categoryRepository: ICategoryRepository) {}

    async execute({ name, description }: IRequest): Promise<void> {
        const categoryExists = await this.categoryRepository.findByName(name);
        if (categoryExists) {
            throw new Error('Category already exists!');
        }
        await this.categoryRepository.create({ name, description });
    }
}
