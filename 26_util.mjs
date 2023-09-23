import util from 'util';

const firstName = "Heri";
const lastName  = "Purwanto";

console.info(`Hello ${firstName} ${lastName}`);
console.info(util.format("Hello %s %s", firstName, lastName));

const Person = {
    firstName   : "Heri",
    lastName    : "Purwanto"
}

console.info(`Person : ${JSON.stringify(Person)}`);
console.info(util.format("Person : %j", Person));