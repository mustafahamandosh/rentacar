import { v4 as uuid } from 'uuid';

export class Car {
    id?: string;

    name: string;

    description: string;

    brand: string;

    daily_rate: number;

    license_plate: string;

    fine_amount: number;

    available: boolean;

    category_id: string;

    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
            this.available = true;
            this.created_at = new Date();
        }
    }
}
