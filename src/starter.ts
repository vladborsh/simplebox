import { CanvasController } from './canvas-controller';
import { RenderLoop } from './render-loop';
import { ObjectStorage } from './object-storage';
import { Renderer } from './renderer';

export class Starter {
    private static instance: Starter;

    public static getInstance(): Starter {
        if (!this.instance) {
            this.instance = new Starter();
        }

        return this.instance;
    }

    private constructor() {}

    public start(): void {
        const canvasController = new CanvasController();
        const renderLoop = new RenderLoop();
        const objectStorage = ObjectStorage.getInstance();

        const renderer = new Renderer(canvasController, renderLoop, objectStorage);

        renderer.start();
    }
}