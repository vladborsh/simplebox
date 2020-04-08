import { VectorInterface } from 'src/interfaces/vector.interface';

/**
 * dE = P * t
 */
export function KineticEnergy(power: VectorInterface, dt: number): VectorInterface {
    return {
        x: power.x * dt,
        y: power.y * dt,
    };
}