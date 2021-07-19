import { Specifications } from '../../../model/Specifications';
import { SpecificationsRepository } from '../../../repositories/implementations/SpecificationsRepository';

export class ListSpecificationUseCase {
    constructor(private specificationsRepository: SpecificationsRepository) {}

    execute(): Specifications[] {
        return this.specificationsRepository.list();
    }
}
