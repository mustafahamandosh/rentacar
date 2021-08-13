import { Router } from 'express';

import { CreateCarController } from 'usecases/car/CreateCarController';

export const carsRoutes = Router();

const createCarController = new CreateCarController();

carsRoutes.post('/', createCarController.handle);
