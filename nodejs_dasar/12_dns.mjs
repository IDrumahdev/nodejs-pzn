import dns from 'dns/promises';

const address = await dns.lookup("rumahdev.pro");

console.info(address.address);
console.info(address.family);