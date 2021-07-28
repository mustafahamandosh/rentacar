import { container } from 'tsyringe';

import { ICategoryRepository } from 'repository-interface/ICategoryRepository';
import { IUserRepository } from 'repository-interface/IUserRepository';
import { PostgresCategoryRepository } from 'repository/PostgresCategoryRepository';
import { PostgresSpecificationsRepository } from 'repository/PostgresSpecificationsRepository';
import { UserRepository } from 'repository/UserRepository';

container.registerSingleton<ICategoryRepository>(
    'PostgresCategoryRepository',
    PostgresCategoryRepository,
);

container.registerSingleton<ICategoryRepository>(
    'PostgresSpecificationsRepository',
    PostgresSpecificationsRepository,
);

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
