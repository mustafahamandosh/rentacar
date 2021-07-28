import { inject, injectable } from 'tsyringe';

import { Specifications } from 'models/Specifications';
import { ISpecificationsRepository } from 'repository-interface/ISpecificationsRepository';

@injectable()
export class ListSpecificationUseCase {
    constructor(
        @inject('PostgresSpecificationsRepository')
        private specificationsRepository: ISpecificationsRepository,
    ) {}

    async execute(): Promise<Specifications[]> {
        return await this.specificationsRepository.list();
    }
}
