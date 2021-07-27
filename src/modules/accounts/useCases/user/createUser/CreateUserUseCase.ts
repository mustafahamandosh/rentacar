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
        await this.userRepository.create({
            name,
            email,
            password,
            driver_license,
        });
    }
}
