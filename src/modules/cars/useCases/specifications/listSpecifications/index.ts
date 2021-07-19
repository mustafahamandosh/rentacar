import { SpecificationsRepository } from '../../../repositories/implementations/SpecificationsRepository';
import { ListSpecificationsController } from './ListSpecificationsController';
import { ListSpecificationUseCase } from './ListSpecificationUseCase';

const specificationsRepository = SpecificationsRepository.getInstance();
const listSpecificationUseCase = new ListSpecificationUseCase(
    specificationsRepository,
);
export const listSpecificationsController = new ListSpecificationsController(
    listSpecificationUseCase,
);
