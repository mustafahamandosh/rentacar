import { container } from 'tsyringe';

import { ICategoryRepository } from '../../modules/cars/repositories/ICategoryRepository';
import { PostgresCategoryRepository } from '../../modules/cars/repositories/implementations/PostgresCategoryRepository';
import { PostgresSpecificationsRepository } from '../../modules/cars/repositories/implementations/PostgresSpecificationsRepository';

container.registerSingleton<ICategoryRepository>(
    'PostgresCategoryRepository',
    PostgresCategoryRepository,
);

container.registerSingleton<ICategoryRepository>(
    'PostgresSpecificationsRepository',
    PostgresSpecificationsRepository,
);
