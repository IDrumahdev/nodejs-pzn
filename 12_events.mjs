import {EventEmitter} from 'events';

const emmitter = new EventEmitter();

emmitter.addListener("hello", (name) => {
    console.info(`Hello ${name}`);
});

emmitter.addListener("hello", (name) => {
    console.info(`Hallo ${name}`);
});

emmitter.emit("hello","Heri");