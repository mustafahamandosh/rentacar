import { Category } from 'models/Category';
import {
    ICategoryDTO,
    ICategoryRepository,
} from 'repository-interface/ICategoryRepository';

export class CategoryRepositoryInMemory implements ICategoryRepository {
    categories: Category[] = [];

    async create({ name, description }: ICategoryDTO): Promise<void> {
        const category = new Category();
        Object.assign(category, { name, description });
        this.categories.push(category);
    }

    async findByName(name: string): Promise<Category | undefined> {
        return this.categories.find((category) => category.name === name);
    }

    async list(): Promise<Category[]> {
        return this.categories;
    }
}
