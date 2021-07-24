import { Category } from '../model/Category';

export interface ICategoryDTO {
    name: string;
    description: string;
}

export interface ICategoryRepository {
    create({ name, description }: ICategoryDTO): Promise<void>;

    list(): Promise<Category[]>;

    findByName(name: string): Promise<Category | undefined>;
}
