import { ISpecificationsRepository } from '../../../repositories/ISpecificationsRepository';

interface IRequest {
    name: string;
    description: string;
}

export class CreateSpecificationsUseCase {
    constructor(private specificationsRepository: ISpecificationsRepository) {}

    execute({ name, description }: IRequest): void {
        const isSpecificationExists =
            this.specificationsRepository.findByName(name);

        if (isSpecificationExists) {
            throw new Error('Specification name already exist!');
        }

        this.specificationsRepository.create({ name, description });
    }
}
