import { Router } from 'express';

import { isAdmin } from 'middlewares/isAdmin';
import { isAuthenticated } from 'middlewares/isAuthenticated';
import { CreateCarController } from 'usecases/car/createCar/CreateCarController';
import { CreateCarSpecificationController } from 'usecases/car/createCarSpecification/CreateCarSpecificationController';
import { ListAvailableCarsController } from 'usecases/car/listAvaialbeCars/ListAvailableCarsController';

export const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const carSpecificationController = new CreateCarSpecificationController();

carsRoutes.post('/', isAuthenticated, isAdmin, createCarController.handle);
carsRoutes.get('/available', listAvailableCarsController.handle);
carsRoutes.post(
    '/specifications/:id',
    isAuthenticated,
    isAdmin,
    carSpecificationController.handle,
);
