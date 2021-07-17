import { Router } from 'express';
import { v4 as uuid } from 'uuid';

export const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post('/', (req, res) => {
    const { name, description } = req.body;
    const category = { id: uuid(), name, description };
    categories.push(category);
    return res.status(201).send();
});
