import { Router } from 'express';

import { CategoryRepository } from '../repositories/CategoryRepository';

export const categoriesRoutes = Router();

const categoryRepository = new CategoryRepository();

categoriesRoutes.post('/', (req, res) => {
    const { name, description, title } = req.body;
    categoryRepository.create({ name, title, description });
    return res.status(201).send();
});

categoriesRoutes.get('/', (req, res) => {
    const categories = categoryRepository.list();
    return res.json({ categories });
});
