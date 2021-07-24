import { Category } from '../../model/Category';
import { ICategoryDTO, ICategoryRepository } from '../ICategoryRepository';

export class CategoryRepository implements ICategoryRepository {
    private readonly categories: Category[];

    private static INSTANCE: CategoryRepository;

    private constructor() {
        this.categories = [];
    }

    public static getInstance(): CategoryRepository {
        if (!this.INSTANCE) {
            this.INSTANCE = new CategoryRepository();
        }
        return this.INSTANCE;
    }

    async create({ name, description }: ICategoryDTO): Promise<void> {
        const category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });

        this.categories.push(category);
    }

    async list(): Promise<Category[]> {
        return this.categories;
    }

    async findByName(categoryName: string): Promise<Category | undefined> {
        return this.categories.find(({ name }) => name === categoryName);
    }
}
