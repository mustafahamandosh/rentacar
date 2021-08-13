import { NextFunction, Request, Response } from 'express';

import { AppError } from 'errors/AppError';
import { UserRepository } from 'repository/UserRepository';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function isAdmin(req: Request, res: Response, next: NextFunction) {
    const { id } = req.user;
    const userRepository = new UserRepository();
    const user = await userRepository.findById(id);
    if (!user?.isAdmin) {
        throw new AppError(`'User isn't admin'`);
    }
    return next();
}
