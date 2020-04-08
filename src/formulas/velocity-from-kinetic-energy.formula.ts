import { VectorInterface } from 'src/interfaces/vector.interface';

export function VelocityFromKineticEnergy(kineticEnergy: VectorInterface, mass: number): VectorInterface {
    return {
        x: Math.sqrt(( 2 * kineticEnergy.x) / mass ),
        y: Math.sqrt(( 2 * kineticEnergy.y) / mass ),
    }
}