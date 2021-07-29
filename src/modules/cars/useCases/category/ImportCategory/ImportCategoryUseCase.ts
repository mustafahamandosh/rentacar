import fs from 'fs';

import csvParse from 'csv-parse';
import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../../errors/AppError';

import { ICategoryRepository } from 'repository-interface/ICategoryRepository';

interface ICategoryFile {
    name: string;
    description: string;
}

@injectable()
export class ImportCategoryUseCase {
    constructor(
        @inject('PostgresCategoryRepository')
        private categoryRepository: ICategoryRepository,
    ) {}

    loadCategories(file: Express.Multer.File): Promise<ICategoryFile[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file?.path);
            const categories: ICategoryFile[] = [];
            const parseFile = csvParse();
            stream.pipe(parseFile);
            parseFile
                .on('data', async (line) => {
                    const [name, description] = line;
                    categories.push({ name, description });
                })
                .on('end', () => {
                    fs.promises.unlink(file.path).then((r) => r);
                    return resolve(categories);
                })
                .on('error', () => {
                    return reject(new AppError('Error while loading file'));
                });
        });
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file);
        categories.map(async ({ name, description }) => {
            const isCategoryExist = await this.categoryRepository.findByName(
                name,
            );
            if (isCategoryExist) {
                throw new AppError('Category already exists!');
            }
            await this.categoryRepository.create({ name, description });
        });
    }
}
