import { Router } from 'express';

import { CreateUserController } from '../modules/accounts/useCases/user/createUser/CreateUserController';

export const userRoutes = Router();

const createUserController = new CreateUserController();

userRoutes.post('/', (req, res) => {
    return createUserController.handle(req, res);
});
