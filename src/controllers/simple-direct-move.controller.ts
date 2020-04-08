import { ControllerInterface } from 'src/interfaces/controller.interface';
import { VectorInterface } from 'src/interfaces/vector.interface';

export class SimpleDirectMoveController implements ControllerInterface {
    constructor(private velocity: VectorInterface) {}

    public update(position: VectorInterface, dt: number): void {
        position.x += dt * this.velocity.x;
        position.y += dt * this.velocity.y;
    }
}