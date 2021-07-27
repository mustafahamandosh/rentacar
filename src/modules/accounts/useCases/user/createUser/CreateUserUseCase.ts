import bcrypt from 'bcryptjs';
import { inject, injectable } from 'tsyringe';

import { ICreateUserDTO } from '../../../dtos/ICreateUserDTO';
import { IUserRepository } from '../../../repository/IUserRepository';

@injectable()
export class CreateUserUseCase {
    constructor(
        @inject('UserRepository') private userRepository: IUserRepository,
    ) {}

    async execute({
        name,
        email,
        password,
        driver_license,
    }: ICreateUserDTO): Promise<void> {
        const passwordHash = bcrypt.hashSync(password, 8);
        await this.userRepository.create({
            name,
            email,
            password: passwordHash,
            driver_license,
        });
    }
}
