import {URL} from 'url';

const rumahdev = new URL("https://rumahdev.pro/belajar?kelas=nodejs");

rumahdev.host = "rumahdev.biz.id";
rumahdev.searchParams.append("status","premium");

console.info(rumahdev.toString);
console.info(rumahdev.href);
console.info(rumahdev.protocol);
console.info(rumahdev.host);
console.info(rumahdev.pathname);
console.info(rumahdev.searchParams);