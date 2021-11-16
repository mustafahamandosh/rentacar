import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity('car_images')
export class CarImage {
    @PrimaryColumn()
    id: string;

    @Column()
    image_name: string;

    @CreateDateColumn()
    created_at: Date;

    @Column()
    car_id: string;
}
