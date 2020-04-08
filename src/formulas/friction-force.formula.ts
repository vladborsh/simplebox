import { VectorInterface } from 'src/interfaces/vector.interface';

/**
 * F = -k * v 
 */
export function FrictionForce(k: VectorInterface, velocity: VectorInterface): VectorInterface {
    return {
        x: -k.x * velocity.x,
        y: -k.y * velocity.y,
    };
}