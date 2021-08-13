import { container } from 'tsyringe';

import { ICarRepository } from 'repository-interface/ICarRepository';
import { ICategoryRepository } from 'repository-interface/ICategoryRepository';
import { IUserRepository } from 'repository-interface/IUserRepository';
import { PostgresCarRepository } from 'repository/PostgresCarRepository';
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

container.registerSingleton<ICarRepository>(
    'PostgresCarRepository',
    PostgresCarRepository,
);

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
