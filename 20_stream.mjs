import fs from 'fs';

const writer = fs.createWriteStream("target.log");

writer.write("Heri\n");
writer.write("Purwanto\n");
writer.write("Ibnudirsan\n");
writer.end();

const reader = fs.createReadStream("target.log");
reader.addListener("data",(data) => {
    console.info(data.toString());
});