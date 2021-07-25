import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../modules/cars/useCases/category/createCategory/CreateCategoryController';
import { ImportCategoryController } from '../modules/cars/useCases/category/ImportCategory/ImportCategoryController';
import { ListCategoryController } from '../modules/cars/useCases/category/listCategories/ListCategoryController';

export const categoriesRoutes = Router();

const upload = multer({ dest: './tmp' });

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoryController = new ListCategoryController();

categoriesRoutes.post('/', (req, res) => {
    return createCategoryController.handle(req, res);
});

categoriesRoutes.get('/', (req, res) => {
    return listCategoryController.handle(req, res);
});

categoriesRoutes.post('/import', upload.single('file'), (req, res) => {
    return importCategoryController.handle(req, res);
});
