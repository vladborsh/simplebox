import { VectorInterface } from 'src/interfaces/vector.interface';

/** 
 * P = F * v
*/
export function Power(force: VectorInterface, velocity: VectorInterface): VectorInterface {
    return {
        x: force.x * velocity.x,
        y: force.y * velocity.y,
    };
}