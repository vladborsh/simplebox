import { CanvasController } from './canvas-controller';
import { RenderLoop } from './render-loop';
import { ObjectStorage } from './object-storage';

export class Renderer {
    constructor(
        private canvasController: CanvasController,
        private renderLoop: RenderLoop,
        private objectStorage: ObjectStorage,
    ) {}

    public start(): void {
        this.canvasController.createCanvas();
        this.renderLoop.start(50, () => {
            this.canvasController.context.clearRect(0, 0, this.canvasController.canvas.width, this.canvasController.canvas.height);
            this.objectStorage.renderStorage.forEach(object => object.render(this.canvasController.context));
            this.objectStorage.worldStorage.forEach(object => object.update(this.renderLoop.elapsed));
        });
    }
}