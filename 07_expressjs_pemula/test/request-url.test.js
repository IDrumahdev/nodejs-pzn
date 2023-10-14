import express from 'express';
import request from 'supertest';

const app = express();

app.get('/hello/word', (req, res) => {
    res.json({
        path : req.path,
        originalUrl : req.originalUrl,
        hostname : req.hostname,
        protocol : req.protocol,
        secure :req.secure
    });
});

test("Test Request URL", async () => {
    const response = await request(app)
                            .get("/hello/word")
                            .query({name : "ibnudirsan"});

    expect(response.body).toEqual({
        path: "/hello/word",
        originalUrl: "/hello/word?name=ibnudirsan",
        hostname: "127.0.0.1",
        protocol: "http",
        secure: false
    });
});