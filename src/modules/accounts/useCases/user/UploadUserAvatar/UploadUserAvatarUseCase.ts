import { inject, injectable } from 'tsyringe';

import { User } from 'models/User';
import { IUserRepository } from 'repository-interface/IUserRepository';
import { deleteFile } from 'utils/file';

interface IRequest {
    user_id: string;
    avatar: string;
}

@injectable()
export class UploadUserAvatarUseCase {
    constructor(
        @inject('UserRepository') private userRepository: IUserRepository,
    ) {}

    async execute({ user_id, avatar }: IRequest): Promise<void> {
        const user = await this.userRepository.findById(user_id);
        if (user?.avatar) {
            await deleteFile(`./tmp/avatar/${user.avatar}`);
        }
        if (user) {
            user.avatar = avatar;
        }
        await this.userRepository.create(user as User);
    }
}
