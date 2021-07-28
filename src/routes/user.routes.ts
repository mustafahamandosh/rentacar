import { Router } from 'express';

import { CreateUserController } from 'usecases/user/createUser/CreateUserController';

export const userRoutes = Router();

const createUserController = new CreateUserController();

userRoutes.post('/', createUserController.handle);
