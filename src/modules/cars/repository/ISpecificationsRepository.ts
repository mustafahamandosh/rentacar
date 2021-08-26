import { Specifications } from 'models/Specifications';

export interface ISpecificationsDTO {
    name: string;
    description: string;
}

export interface ISpecificationsRepository {
    create({ name, description }: ISpecificationsDTO): Promise<Specifications>;

    list(): Promise<Specifications[]>;

    findByName(name: string): Promise<Specifications | undefined>;

    findByIds(ids: string[]): Promise<Specifications[]>;
}
