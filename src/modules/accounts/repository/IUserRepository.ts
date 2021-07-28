import { ICreateUserDTO } from 'dto/ICreateUserDTO';
import { User } from 'models/User';

export interface IUserRepository {
    create(user: ICreateUserDTO): Promise<void>;

    findByEmail(email: string): Promise<User | undefined>;

    findById(id: string): Promise<User | undefined>;
}
