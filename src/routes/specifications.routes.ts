import { Router } from 'express';

import { SpecificationsRepository } from '../modules/cars/repositories/implementations/SpecificationsRepository';
import { CreateSpecificationsService } from '../modules/cars/services/CreateSpecificationsService';

export const specificationsRoutes = Router();

const specificationsRepository = new SpecificationsRepository();
const specificationsService = new CreateSpecificationsService(
    specificationsRepository,
);

specificationsRoutes.post('/', (req, res) => {
    const { name, description } = req.body;
    specificationsService.execute({ name, description });
    return res.status(201).send();
});

specificationsRoutes.get('/', (req, res) => {
    return res.json({ specifications: specificationsRepository.list() });
});
