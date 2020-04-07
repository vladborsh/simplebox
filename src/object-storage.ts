import { UpdatableInterface } from './interfaces/updatable.interface';
import { RenderedInterface } from './interfaces/rendered.interface';

export class ObjectStorage {
    public renderStorage: RenderedInterface[] = [];
    public worldStorage: UpdatableInterface[] = [];

    public register(object: UpdatableInterface & RenderedInterface): void{
        this.renderStorage.push(object);
        this.worldStorage.push(object);
    }
}