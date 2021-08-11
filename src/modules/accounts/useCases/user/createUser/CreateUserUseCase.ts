import { hashSync } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';

import { ICreateUserDTO } from 'dto/ICreateUserDTO';
import { AppError } from 'errors/AppError';
import { IUserRepository } from 'repository-interface/IUserRepository';

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
            throw new AppError('This email is already in use');
        }
        const hashPassword = hashSync(password, 8);
        await this.userRepository.create({
            name,
            email,
            password: hashPassword,
            driver_license,
        });
    }
}
