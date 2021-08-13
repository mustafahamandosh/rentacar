import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { AppError } from 'errors/AppError';
import { UserRepository } from 'repository/UserRepository';

export async function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<void> {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new AppError('Token is missing', 401);
    }

    const [, token] = authHeader.split(' ');

    try {
        const { sub: user_id } = verify(
            token,
            'b59f502691a0c687ade62a3d49de4917',
        );
        const userRepository = new UserRepository();
        const user = await userRepository.findById(user_id as string);
        if (user) {
            req.user = {
                id: user_id as string,
            };
            next();
        }
        return;
    } catch (e) {
        throw new AppError('Invalid token', 401);
    }
}
