import { Router } from 'express';

import { authenticationRoutes } from './authentication.routes';
import { categoriesRoutes } from './categories.routes';
import { specificationsRoutes } from './specifications.routes';
import { userRoutes } from './user.routes';

export const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/specifications', specificationsRoutes);
router.use('/users', userRoutes);
router.use(authenticationRoutes);
