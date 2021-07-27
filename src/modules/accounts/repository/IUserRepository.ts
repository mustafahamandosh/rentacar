import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../model/User';

export interface IUserRepository {
    create(user: ICreateUserDTO): Promise<void>;

    findByEmail(email: string): Promise<User | undefined>;
}
