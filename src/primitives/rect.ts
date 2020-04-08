import { RenderedInterface } from 'src/interfaces/rendered.interface';
import { VectorInterface } from 'src/interfaces/vector.interface';
import { UpdatableInterface } from 'src/interfaces/updatable.interface';
import { ControllerInterface } from 'src/interfaces/controller.interface';

export class Rect implements RenderedInterface, UpdatableInterface {
    constructor(
        public color: string,
        public position: VectorInterface,
        public size: VectorInterface,
        private controller: ControllerInterface,
    ) {} 
    
    render(context: CanvasRenderingContext2D): void {
        context.fillStyle = this.color;
        context.fillRect( this.position.x, this.position.y, this.size.x, this.size.y, );
    }

    update(dt: number) {
        this.controller.update(this.position, dt);
    }
}