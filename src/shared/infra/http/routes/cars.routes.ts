import { Router } from 'express';

import { isAdmin } from 'middlewares/isAdmin';
import { isAuthenticated } from 'middlewares/isAuthenticated';
import { CreateCarController } from 'usecases/car/CreateCarController';

export const carsRoutes = Router();

const createCarController = new CreateCarController();

carsRoutes.post('/', isAuthenticated, isAdmin, createCarController.handle);
