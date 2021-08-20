import { Router } from 'express';

import { isAdmin } from 'middlewares/isAdmin';
import { isAuthenticated } from 'middlewares/isAuthenticated';
import { CreateCarController } from 'usecases/car/createCar/CreateCarController';
import { ListAvailableCarsController } from 'usecases/car/listAvaialbeCars/ListAvailableCarsController';

export const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();

carsRoutes.post('/', isAuthenticated, isAdmin, createCarController.handle);
carsRoutes.get('/available', listAvailableCarsController.handle);
