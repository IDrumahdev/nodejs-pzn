import fs from 'fs';
import zlib from 'zlib';

const source = fs.readFileSync("dummy_gzip.txt");
const result = zlib.unzipSync(source);

fs.writeFileSync("dummy_gzip_unzip.txt",result)