import { ICreateUserDTO } from 'dto/ICreateUserDTO';
import { UserRepositoryInMemory } from 'repository-interface/in-memory/UserRepositoryInMemory';
import { AuthenticateUserCase } from 'usecases/user/authenticateUser/AuthenticateUserCase';
import { CreateUserUseCase } from 'usecases/user/createUser/CreateUserUseCase';

let authenticateUserCase: AuthenticateUserCase;
let userRepositoryInMemory: UserRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe('Authenticate user', () => {
    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory();
        authenticateUserCase = new AuthenticateUserCase(userRepositoryInMemory);
        createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
    });

    it('should be able to authenticate a user', async () => {
        const user: ICreateUserDTO = {
            name: 'mustafa',
            email: 'mustafa@email.com',
            password: '12345678',
            driver_license: 'g5j6',
        };
        await createUserUseCase.execute(user);
        const isUserAuthenticated = await authenticateUserCase.execute({
            email: user.email,
            password: user.password,
        });
        expect(isUserAuthenticated).toHaveProperty('token');
    });

    it('should not be able to authenticate a user if e-mail is incorrect', () => {
        expect(async () => {
            await authenticateUserCase.execute({
                email: 'wrong-email@email.com',
                password: '12345678',
            });
        }).rejects.toThrow('Email or password are incorrect');
    });

    it('should not be able to authenticate a user if password is incorrect', () => {
        expect(async () => {
            const user: ICreateUserDTO = {
                name: 'mustafa',
                email: 'mustafa@email.com',
                password: '12345678',
                driver_license: 'g5j6',
            };
            await createUserUseCase.execute(user);
            await authenticateUserCase.execute({
                email: user.email,
                password: 'wrong-password',
            });
        }).rejects.toThrow('Email or password are incorrect');
    });
});
