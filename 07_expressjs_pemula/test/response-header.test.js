import express from 'express';
import request from 'supertest';

const app = express();

app.get('/', (req, res) => {
    res.set({
        "X-Power-By" : "Rumahdev",
        "X-Author" : "Ibnudirsan",
    });
    res.send(`Hello Response`);
});

test("Test Response Header", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hello Response");
    expect(response.get("X-Power-By")).toBe("Rumahdev");
    expect(response.get("X-Author")).toBe("Ibnudirsan");
});