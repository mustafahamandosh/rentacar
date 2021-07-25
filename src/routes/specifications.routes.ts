import { Router } from 'express';

import { CreateSpecificationController } from '../modules/cars/useCases/specifications/createSpecification/CreateSpecificationController';
import { listSpecificationsController } from '../modules/cars/useCases/specifications/listSpecifications';

export const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.post('/', (req, res) => {
    return createSpecificationController.handle(req, res);
});

specificationsRoutes.get('/', (req, res) => {
    return listSpecificationsController.handle(req, res);
});
