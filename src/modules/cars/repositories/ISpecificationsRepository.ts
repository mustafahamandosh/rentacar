import { Specifications } from '../model/Specifications';

export interface ISpecificationsDTO {
    name: string;
    description: string;
}

export interface ISpecificationsRepository {
    create({ name, description }: ISpecificationsDTO): Promise<void>;

    list(): Promise<Specifications[]>;

    findByName(name: string): Promise<Specifications | undefined>;
}
