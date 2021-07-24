import { container } from 'tsyringe';

import { ICategoryRepository } from '../../modules/cars/repositories/ICategoryRepository';
import { PostgresCategoryRepository } from '../../modules/cars/repositories/implementations/PostgresCategoryRepository';

container.registerSingleton<ICategoryRepository>(
    'PostgresCategoryRepository',
    PostgresCategoryRepository,
);
