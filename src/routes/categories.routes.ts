import { Router } from 'express';

import { createCategoryController } from '../modules/cars/useCases/createCategory';

export const categoriesRoutes = Router();

categoriesRoutes.post('/', (req, res) => {
    return createCategoryController.handle(req, res);
});

categoriesRoutes.get('/', (req, res) => {
    // return res.json({ categories: categoryRepository.list() });
});
