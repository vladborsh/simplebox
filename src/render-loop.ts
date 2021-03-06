export class RenderLoop {
    public stop: boolean = false;
    public frameCount: number = 0
    public fpsInterval: number; 
    public startTime: number;
    public now: number;
    public then: number;
    public elapsed: number;
    
    public start(fps: number, renderCallback: () => void): void {
        this.then = Date.now();
        this.fpsInterval = 1000 / fps;
        this.startTime = this.then;
        this.tick(renderCallback);
    }

    public tick(renderCallback: () => void): void {
        if (this.stop) {
            return;
        }

        requestAnimationFrame(this.tick.bind(this, renderCallback));
        // calc elapsed time since last loop
        this.now = Date.now();
        this.elapsed = this.now - this.then;
        if (this.elapsed > this.fpsInterval) {
            // Get ready for next frame by setting then=now, but...
            // Also, adjust for fpsInterval not being multiple of 16.67
            this.then = this.now - (this.elapsed % this.fpsInterval);

            if (!!renderCallback) {
                renderCallback();
            }
        }
    }

}