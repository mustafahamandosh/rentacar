import { Category } from '../model/Category';

interface ICategoryDTO {
    name: string;
    description: string;
}

export class CategoryRepository {
    private readonly categories: Category[];

    constructor() {
        this.categories = [];
    }

    create({ name, description }: ICategoryDTO): void {
        const category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });

        this.categories.push(category);
    }

    list(): Category[] {
        return this.categories;
    }

    findByName(categoryName: string): Category | undefined {
        return this.categories.find(({ name }) => name === categoryName);
    }
}
