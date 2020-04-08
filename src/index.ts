import { ObjectStorage } from './object-storage';
import { Rect } from './primitives/rect';
import { SimpleDirectMoveController } from './controllers/simple-direct-move.controller';
import { Starter } from './starter';

const objectStorage = ObjectStorage.getInstance();

objectStorage.register(new Rect(
    '000000',
    {x: 5, y: 5},
    {x: 5, y: 5},
    new SimpleDirectMoveController({x: 0.02, y: 0 }),
));

Starter.getInstance().start();