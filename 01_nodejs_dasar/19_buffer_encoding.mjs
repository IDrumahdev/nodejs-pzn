const buffer = Buffer.from("Heri Purwanto","utf8");

console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

const bufferBase64 = Buffer.from("SGVyaSBQdXJ3YW50bw==","base64");
console.info(bufferBase64.toString("utf8"));