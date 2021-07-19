import { Specifications } from '../../model/Specifications';
import {
    ISpecificationsDTO,
    ISpecificationsRepository,
} from '../ISpecificationsRepository';

export class SpecificationsRepository implements ISpecificationsRepository {
    private readonly specifications: Specifications[];
    private static INSTANCE: SpecificationsRepository;

    private constructor() {
        this.specifications = [];
    }

    public static getInstance(): SpecificationsRepository {
        if (!this.INSTANCE) {
            this.INSTANCE = new SpecificationsRepository();
        }
        return this.INSTANCE;
    }

    create({ name, description }: ISpecificationsDTO): void {
        const specification = new Specifications();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });

        this.specifications.push(specification);
    }

    list(): Specifications[] {
        return this.specifications;
    }

    findByName(specificationName: string): Specifications | undefined {
        return this.specifications.find(
            ({ name }) => name === specificationName,
        );
    }
}
