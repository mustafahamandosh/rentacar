import { Specifications } from 'models/Specifications';
import { inject, injectable } from 'tsyringe';

import { ISpecificationsRepository } from '../../../repositories/ISpecificationsRepository';

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
