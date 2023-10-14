import express from 'express';
import request from 'supertest';

const app = express();

app.get('/', (req, res) => {
    res.send(`Hello ${req.query.firstName} ${req.query.lastName}`);
});

test("Test Request Query", async () => {
    const response = await request(app)
                            .get("/")
                            .query({firstName : "Heri", lastName: "Purwanto"});
    expect(response.text).toBe("Hello Heri Purwanto");
});