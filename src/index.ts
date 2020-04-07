import { CanvasController } from './canvas-controller';
import { RenderLoop } from './render-loop';
import { Renderer } from './renderer';
import { Rect } from './rendered-primitives/rect';
import { ObjectStorage } from './object-storage';

const canvasController = new CanvasController();
const renderLoop = new RenderLoop();
const objectStorage = new ObjectStorage();

const renderer = new Renderer(canvasController, renderLoop, objectStorage);

objectStorage.register(new Rect('000000', {x: 5, y: 5}, {x: 5, y: 5}, rect => {
    rect.position.x += 1;
    rect.position.y += 2;
}));

renderer.start();