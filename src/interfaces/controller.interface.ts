import { VectorInterface } from './vector.interface';

export interface ControllerInterface {
    update(position: VectorInterface, dt: number): void;
}