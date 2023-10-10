import {sayHello, sum} from 'rumahdev-librarypzn';
import {min, max} from 'rumahdev-librarypzn/number';

console.info(sayHello("Heri"));

const numbers = [10,20,30,40,50];
console.info(sum(numbers));

console.info(min(40, 35));
console.info(max(30, 45));