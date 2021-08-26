import { Specifications } from 'models/Specifications';
import {
    ISpecificationsDTO,
    ISpecificationsRepository,
} from 'repository-interface/ISpecificationsRepository';

export class SpecificationRepositoryInMemory
    implements ISpecificationsRepository
{
    specifications: Specifications[] = [];

    async create({
        name,
        description,
    }: ISpecificationsDTO): Promise<Specifications> {
        const specification = new Specifications();
        Object.assign(specification, {
            name,
            description,
        });
        this.specifications.push(specification);
        return specification;
    }

    async findByIds(ids: string[]): Promise<Specifications[]> {
        return this.specifications.filter(({ id }) =>
            ids.includes(id as string),
        );
    }

    async findByName(name: string): Promise<Specifications | undefined> {
        return this.specifications.find(
            (specification) => specification.name === name,
        );
    }

    async list(): Promise<Specifications[]> {
        return this.specifications;
    }
}
