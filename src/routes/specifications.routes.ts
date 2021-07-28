import { Router } from 'express';

import { CreateSpecificationController } from 'usecases/specifications/createSpecification/CreateSpecificationController';
import { ListSpecificationsController } from 'usecases/specifications/listSpecifications/ListSpecificationsController';

export const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationsController = new ListSpecificationsController();

specificationsRoutes.post('/', createSpecificationController.handle);

specificationsRoutes.get('/', listSpecificationsController.handle);
