import { CreateSpecificationController } from 'controllers/specifications/createSpecification/CreateSpecificationController';
import { ListSpecificationsController } from 'controllers/specifications/listSpecifications/ListSpecificationsController';
import { Router } from 'express';

export const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationsController = new ListSpecificationsController();

specificationsRoutes.post('/', (req, res) => {
    return createSpecificationController.handle(req, res);
});

specificationsRoutes.get('/', (req, res) => {
    return listSpecificationsController.handle(req, res);
});
