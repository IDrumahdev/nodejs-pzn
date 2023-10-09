import fs from 'fs/promises';

const buffer = await fs.readFile("dummy.txt");

console.info(buffer.toString());

await fs.writeFile("dummy_write.txt","ini data yang di tulis kembali.")