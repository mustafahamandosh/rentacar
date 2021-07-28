import { inject, injectable } from 'tsyringe';

import { ISpecificationsRepository } from 'repository-interface/ISpecificationsRepository';

interface IRequest {
    name: string;
    description: string;
}

@injectable()
export class CreateSpecificationsUseCase {
    constructor(
        @inject('PostgresSpecificationsRepository')
        private specificationsRepository: ISpecificationsRepository,
    ) {}

    async execute({ name, description }: IRequest): Promise<void> {
        const isSpecificationExists =
            await this.specificationsRepository.findByName(name);

        if (isSpecificationExists) {
            throw new Error('Specification name already exist!');
        }

        await this.specificationsRepository.create({ name, description });
    }
}
