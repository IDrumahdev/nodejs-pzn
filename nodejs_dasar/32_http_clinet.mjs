import https from 'https';

const endpoint  = "https://eokr9r17i0nwyuf.m.pipedream.net";

const request   = https.request(endpoint, {
    method: "POST",
    header: {
        "Content-Type"  : "application/json",
        "Accept"        : "application/json"
    }
}, (response) => {
    response.addListener("data", (data) => {
        console.info(`Receive data dari Server : ${data.toString()}`);
    });
});

const body = JSON.stringify({
    firstName : "Heri",
    lastName: "Purwanto"
});

request.write(body);
request.end();