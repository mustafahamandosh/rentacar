import { Router } from 'express';

import { AuthenticateUserController } from '../modules/accounts/useCases/user/authenticateUser/AuthenticateUserController';

export const authenticationRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

authenticationRoutes.post('/session', authenticateUserController.handle);
