import { container } from 'tsyringe';

import { UserRepository } from '../../modules/accounts/repository/implementations/UserRepository';
import { IUserRepository } from '../../modules/accounts/repository/IUserRepository';
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

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
