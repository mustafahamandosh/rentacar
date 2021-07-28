import { Router } from 'express';

import { authenticationRoutes } from 'routes/authentication.routes';
import { categoriesRoutes } from 'routes/categories.routes';
import { specificationsRoutes } from 'routes/specifications.routes';
import { userRoutes } from 'routes/user.routes';

export const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/specifications', specificationsRoutes);
router.use('/users', userRoutes);
router.use(authenticationRoutes);
