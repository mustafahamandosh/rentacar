import { Router } from 'express';

import { Category } from '../model/Category';

export const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post('/', (req, res) => {
    const { name, description, title } = req.body;
    const category = new Category();
    Object.assign(category, {
        name,
        title,
        description,
        created_at: new Date(),
    });
    categories.push(category);
    return res.status(201).json(category);
});
