import express from 'express';
import request from 'supertest';

const app = express();

app.get('/', (req, res) => {
    res.send("Hello Word");
});

app.use((req, res, next) => {
    res.status(404).send("404 Not Found Bro");
});

test("Test Expressjs", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hello Word");
});

test("Test Not Found", async () => {
    const response = await request(app).get("/halaman-tidak-ada");
    expect(response.text).toBe("404 Not Found Bro");
});