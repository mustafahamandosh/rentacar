import { Router } from 'express';

import { CreateUserController } from 'usecases/user/createUser/CreateUserController';
import { UploadUserAvatarController } from 'usecases/user/UploadUserAvatar/UploadUserAvatarController';

export const userRoutes = Router();

const createUserController = new CreateUserController();
const uploadUserAvatarController = new UploadUserAvatarController();

userRoutes.post('/', createUserController.handle);

userRoutes.patch('/', uploadUserAvatarController.handle);
