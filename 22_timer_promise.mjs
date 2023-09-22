import timers from 'timers/promises';

console.info(new Date());
const name = await timers.setTimeout(5000,"Heri");
console.info(new Date());
console.info(name);

for await (const startTime of timers.setInterval(1000,"ignored")) {
    console.info(`Start Date at ${new Date()}`);
};