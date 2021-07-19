import { Specifications } from '../model/Specifications';

export interface ISpecificationsDTO {
    name: string;
    description: string;
}

export interface ISpecificationsRepository {
    create({ name, description }: ISpecificationsDTO): void;

    list(): Specifications[];

    findByName(name: string): Specifications | undefined;
}
