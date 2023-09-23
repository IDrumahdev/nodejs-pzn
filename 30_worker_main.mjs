import {threadId, Worker} from 'worker_threads';

const worker1 = new Worker("./31_worker.mjs");
const worker2 = new Worker("./31_worker.mjs");

worker1.addListener("message",(message) => {
    console.info(`Thread-${threadId} receive from worker 1 : ${message}`);
});

worker2.addListener("message",(message) => {
    console.info(`Thread-${threadId} receive from worker 2 : ${message}`);
});

worker1.postMessage(10);
worker2.postMessage(10);