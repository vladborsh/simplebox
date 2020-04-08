import { ControllerInterface } from 'src/interfaces/controller.interface';
import { VectorInterface } from 'src/interfaces/vector.interface';

export class RigidByController implements ControllerInterface {
    private gravity: VectorInterface = { x: 0, y: 0.2 };

    constructor(
        private velocity: VectorInterface,
        private mass: number,
    ) {}

    public update(position: VectorInterface, dt: number): void {
        position.x += dt * (this.velocity.x + this.gravity.x);
        position.y += dt * (this.velocity.y + this.gravity.y);
    }
}