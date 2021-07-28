import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from 'usecases/category/createCategory/CreateCategoryController';
import { ImportCategoryController } from 'usecases/category/ImportCategory/ImportCategoryController';
import { ListCategoryController } from 'usecases/category/listCategories/ListCategoryController';

export const categoriesRoutes = Router();

const upload = multer({ dest: './tmp' });

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoryController = new ListCategoryController();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', (req, res) => {
    return listCategoryController.handle(req, res);
});

categoriesRoutes.post(
    '/import',
    upload.single('file'),
    importCategoryController.handle,
);
