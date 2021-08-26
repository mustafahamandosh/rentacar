import { getRepository, Repository } from 'typeorm';

import { Specifications } from 'models/Specifications';
import {
    ISpecificationsDTO,
    ISpecificationsRepository,
} from 'repository-interface/ISpecificationsRepository';

export class PostgresSpecificationsRepository
    implements ISpecificationsRepository
{
    private repository: Repository<Specifications>;

    constructor() {
        this.repository = getRepository(Specifications);
    }

    async create({
        name,
        description,
    }: ISpecificationsDTO): Promise<Specifications> {
        const specification = this.repository.create({ name, description });
        await this.repository.save(specification);
        return specification;
    }

    async findByName(name: string): Promise<Specifications | undefined> {
        return await this.repository.findOne({ name });
    }

    async list(): Promise<Specifications[]> {
        return await this.repository.find();
    }

    async findByIds(ids: string[]): Promise<Specifications[]> {
        return await this.repository.findByIds(ids);
    }
}
