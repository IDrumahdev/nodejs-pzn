import { Console } from 'console';
import fs from 'fs';

const file = fs.createWriteStream("application.log");

const log = new Console({
    stdout: file,
    stderr: file
});

log.info("Hello Heri");
log.error("Hello Purwanto");

const person = {
    firstName: "Heri",
    lastName: "Purwanto"
}

log.table(person);