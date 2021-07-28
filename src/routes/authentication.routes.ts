import { Router } from 'express';

import { AuthenticateUserController } from 'usecases/user/authenticateUser/AuthenticateUserController';

export const authenticationRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

authenticationRoutes.post('/session', authenticateUserController.handle);
