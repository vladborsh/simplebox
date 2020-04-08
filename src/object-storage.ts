import { UpdatableInterface } from './interfaces/updatable.interface';
import { RenderedInterface } from './interfaces/rendered.interface';

export class ObjectStorage {
    private static instance: ObjectStorage;

    public static getInstance(): ObjectStorage {
        if (!this.instance) {
            this.instance = new ObjectStorage();
        }

        return this.instance;
    }

    private constructor() {}

    public renderStorage: RenderedInterface[] = [];
    public worldStorage: UpdatableInterface[] = [];

    public register(object: UpdatableInterface & RenderedInterface): void{
        this.renderStorage.push(object);
        this.worldStorage.push(object);
    }
}