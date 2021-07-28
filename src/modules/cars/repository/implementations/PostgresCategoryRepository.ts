import { getRepository, Repository } from 'typeorm';

import { Category } from 'models/Category';
import {
    ICategoryDTO,
    ICategoryRepository,
} from 'repository-interface/ICategoryRepository';

export class PostgresCategoryRepository implements ICategoryRepository {
    private repository: Repository<Category>;

    constructor() {
        this.repository = getRepository(Category);
    }

    async create({ name, description }: ICategoryDTO): Promise<void> {
        const category = this.repository.create({ name, description });
        await this.repository.save(category);
    }

    async list(): Promise<Category[]> {
        return await this.repository.find();
    }

    async findByName(name: string): Promise<Category | undefined> {
        return await this.repository.findOne({ name });
    }
}
