import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UploadUserAvatarUseCase } from 'usecases/user/UploadUserAvatar/UploadUserAvatarUseCase';

export class UploadUserAvatarController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id: user_id } = req.user;
        const avatar = req.file?.filename as string;
        const uploadUserAvatarUseCase = container.resolve(
            UploadUserAvatarUseCase,
        );
        await uploadUserAvatarUseCase.execute({ user_id, avatar });
        return res.status(204).send();
    }
}
