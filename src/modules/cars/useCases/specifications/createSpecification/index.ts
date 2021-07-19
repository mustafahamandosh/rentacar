import { SpecificationsRepository } from '../../../repositories/implementations/SpecificationsRepository';
import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationsUseCase } from './CreateSpecificationsUseCase';

const specificationsRepository = SpecificationsRepository.getInstance();
const createSpecificationsUseCase = new CreateSpecificationsUseCase(
    specificationsRepository,
);
export const createSpecificationController = new CreateSpecificationController(
    createSpecificationsUseCase,
);
