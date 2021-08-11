import multer from 'multer';

import { Router } from 'express';
import { CreateUserController } from 'usecases/user/createUser/CreateUserController';
import { UploadUserAvatarController } from 'usecases/user/UploadUserAvatar/UploadUserAvatarController';

import uploadConfig from '../config/upload';
import { isAuthenticated } from '../middlewares/isAuthenticated';

export const userRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));

const createUserController = new CreateUserController();
const uploadUserAvatarController = new UploadUserAvatarController();

userRoutes.post('/', createUserController.handle);

userRoutes.patch(
    '/',
    isAuthenticated,
    uploadAvatar.single('avatar'),
    uploadUserAvatarController.handle,
);
