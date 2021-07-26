import { ICreateUserDTO } from '../dtos/ICreateUserDTO';

export interface IUserRepository {
    create(user: ICreateUserDTO): Promise<void>;
}
