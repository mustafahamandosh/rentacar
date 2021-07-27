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
        const isUserEmailExist = await this.userRepository.findByEmail(email);
        if (isUserEmailExist) {
            throw new Error('This email is already in use');
        }
        const hashPassword = bcrypt.hashSync(password, 8);
        await this.userRepository.create({
            name,
            email,
            password: hashPassword,
            driver_license,
        });
    }
}
