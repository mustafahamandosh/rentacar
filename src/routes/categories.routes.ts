import { Router } from 'express';

import { CategoryRepository } from '../repositories/CategoryRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';

export const categoriesRoutes = Router();

const categoryRepository = new CategoryRepository();
const createCategoryService = new CreateCategoryService(categoryRepository);

categoriesRoutes.post('/', (req, res) => {
    const { name, description } = req.body;
    createCategoryService.execute({ name, description });
    return res.status(201).send();
});

categoriesRoutes.get('/', (req, res) => {
    const categories = categoryRepository.list();
    return res.json({ categories });
});
