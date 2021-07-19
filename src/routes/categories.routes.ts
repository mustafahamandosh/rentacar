import { Router } from 'express';

import { createCategoryController } from '../modules/cars/useCases/category/createCategory';
import { listCategoryController } from '../modules/cars/useCases/category/listCategories';

export const categoriesRoutes = Router();

categoriesRoutes.post('/', (req, res) => {
    return createCategoryController.handle(req, res);
});

categoriesRoutes.get('/', (req, res) => {
    return listCategoryController.handle(req, res);
});
