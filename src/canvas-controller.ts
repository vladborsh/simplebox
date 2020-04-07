import { VectorInterface } from './interfaces/vector.interface';

export class CanvasController {
    public canvas: HTMLCanvasElement;
    public context: CanvasRenderingContext2D;
    public canvasCenter: VectorInterface;

    public createCanvas(w?: number, h?: number): void {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = w || window.innerWidth;
        this.canvas.height = h || window.innerHeight;
        document.body.style.margin = '0 0 0 0';
        this.canvasCenter = {
            x: this.canvas.width / 2,
            y: this.canvas.height / 2,
        }
        document.body.appendChild(this.canvas);
    }
}