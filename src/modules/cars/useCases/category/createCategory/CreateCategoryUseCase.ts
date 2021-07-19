import { ICategoryRepository } from '../../../repositories/ICategoryRepository';

interface IRequest {
    name: string;
    description: string;
}

export class CreateCategoryUseCase {
    constructor(private categoryRepository: ICategoryRepository) {}

    execute({ name, description }: IRequest): void {
        const categoryExists = this.categoryRepository.findByName(name);
        if (categoryExists) {
            throw new Error('Category already exists!');
        }
        this.categoryRepository.create({ name, description });
    }
}
