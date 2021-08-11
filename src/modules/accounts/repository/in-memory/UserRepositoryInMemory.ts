import { ICreateUserDTO } from 'dto/ICreateUserDTO';
import { User } from 'models/User';
import { IUserRepository } from 'repository-interface/IUserRepository';

export class UserRepositoryInMemory implements IUserRepository {
    users: User[] = [];

    async create({
        name,
        email,
        password,
        driver_license,
    }: ICreateUserDTO): Promise<void> {
        const user = new User();
        Object.assign(user, {
            name,
            email,
            password,
            driver_license,
        });
        this.users.push(user);
    }

    async findByEmail(email: string): Promise<User | undefined> {
        return this.users.find((user) => user.email === email);
    }

    async findById(id: string): Promise<User | undefined> {
        return this.users.find((user) => user.id === id);
    }
}
