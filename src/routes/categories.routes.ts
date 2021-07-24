import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../modules/cars/useCases/category/createCategory/CreateCategoryController';
import importCategoryController from '../modules/cars/useCases/category/ImportCategory';
import listCategoryController from '../modules/cars/useCases/category/listCategories';

export const categoriesRoutes = Router();

const upload = multer({ dest: './tmp' });

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post('/', (req, res) => {
    return createCategoryController.handle(req, res);
});

categoriesRoutes.get('/', (req, res) => {
    return listCategoryController().handle(req, res);
});

categoriesRoutes.post('/import', upload.single('file'), (req, res) => {
    return importCategoryController().handle(req, res);
});
