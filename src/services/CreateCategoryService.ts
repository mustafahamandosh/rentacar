import { CategoryRepository } from '../repositories/CategoryRepository';

interface IRequest {
    name: string;
    description: string;
}

export class CreateCategoryService {
    constructor(private categoryRepository: CategoryRepository) {}

    execute({ name, description }: IRequest): void {
        const categoryExists = this.categoryRepository.findByName(name);
        if (categoryExists) {
            throw new Error('Category already exists');
        }
        this.categoryRepository.create({ name, description });
    }
}
