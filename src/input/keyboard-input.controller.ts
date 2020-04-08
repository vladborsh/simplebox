import { Direction } from './direction.enum';

interface Directions {
    [key: number]: Direction;
}

const keyboardDirectionConfig: Directions = {
    37 : Direction.LEFT,
    39 : Direction.RIGHT,
    38 : Direction.UP,
    40 : Direction.DOWN,
    65 : Direction.LEFT,
    68 : Direction.RIGHT,
    87 : Direction.UP,
    83 : Direction.DOWN,
}

const defaultKeyboardDirectionState: Record<Direction, boolean> = {
    [Direction.DOWN]: false,
    [Direction.UP]: false,
    [Direction.RIGHT]: false,
    [Direction.LEFT]: false,
}

export class KeyboardInputController {
    private directionState: Record<Direction, boolean> = defaultKeyboardDirectionState;

    private static instance: KeyboardInputController;

    public static getInstance(): KeyboardInputController {
        if (!this.instance) {
            this.instance = new KeyboardInputController;
        }

        return this.instance;
    }

    private constructor() {
        this.initListeners();
    }

    private initListeners(): void {
        window.addEventListener('keydown', (event: KeyboardEvent) => {
            if (keyboardDirectionConfig[event.keyCode]) {
                this.directionState[keyboardDirectionConfig[event.keyCode]] = true;
            }
        });
        window.addEventListener('keyup', (event: KeyboardEvent) => {
            if (keyboardDirectionConfig[event.keyCode]) {
                this.directionState[keyboardDirectionConfig[event.keyCode]] = false;
            }
        });
    }

    public getDirectionState(): Record<Direction, boolean> {
        return { ...this.directionState };
    }
}