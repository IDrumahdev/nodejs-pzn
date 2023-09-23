import fs from 'fs';
import zlib from 'zlib';

const source = fs.readFileSync("dummy.txt");
const result = zlib.gzipSync(source);

fs.writeFileSync("dummy_gzip.txt", result);