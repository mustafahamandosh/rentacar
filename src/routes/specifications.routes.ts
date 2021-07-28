import { Router } from 'express';

import { isAuthenticated } from '../middlewares/isAuthenticated';

import { CreateSpecificationController } from 'usecases/specifications/createSpecification/CreateSpecificationController';
import { ListSpecificationsController } from 'usecases/specifications/listSpecifications/ListSpecificationsController';

export const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationsController = new ListSpecificationsController();

specificationsRoutes.post(
    '/',
    isAuthenticated,
    createSpecificationController.handle,
);

specificationsRoutes.get('/', listSpecificationsController.handle);
