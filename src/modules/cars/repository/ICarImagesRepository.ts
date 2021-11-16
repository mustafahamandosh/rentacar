import { CarImage } from 'models/CarImage';

export interface ICarImagesRepository {
    created(car_id: string, image_name: string): Promise<CarImage>;
}
