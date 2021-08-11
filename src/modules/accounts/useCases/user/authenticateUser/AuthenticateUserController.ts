import { container } from 'tsyringe';

import { Request, Response } from 'express';

import { AuthenticateUserCase } from './AuthenticateUserCase';

export class AuthenticateUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;
        const authenticateUserCase = container.resolve(AuthenticateUserCase);
        const user = await authenticateUserCase.execute({ email, password });
        return res.status(200).json(user);
    }
}
