import express from 'express';
import request from 'supertest';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cookieParser("RumahdevSecret"));
app.use(express.json());

app.get('/', (req, res) => {
    const name = req.signedCookies["Login"];
    res.send(`Hello ${name}`);
});

app.post('/login', (req, res) => {
    const name = req.body.name;
    res.cookie("Login", name, {path: "/", signed:true});
    res.send(`Hello ${name}`);
});

test("Test Cookie Read", async () => {
    const response = await request(app).get("/")
                            .set("Cookie", "Login=s%3Aibnudirsan.10vZdTTDwI%2FhQ2sOhP4DQv19kds5OeiIl5AGOZ9I3zw; Path=/");
    expect(response.text).toBe("Hello ibnudirsan");
});

test("Test Cookie Write", async () => {
    const response = await request(app).post("/login")
                            .send({name : "ibnudirsan"});
                            console.log(response.get("Set-Cookie"));
    expect(response.get("Set-Cookie").toString()).toContain("ibnudirsan");
    expect(response.text).toBe("Hello ibnudirsan");
});