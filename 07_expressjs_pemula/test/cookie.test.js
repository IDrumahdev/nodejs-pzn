import express from 'express';
import request from 'supertest';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cookieParser());
app.use(express.json());

app.get('/', (req, res) => {
    const name = req.cookies["name"];
    res.send(`Hello ${name}`);
});

app.post('/login', (req, res) => {
    const name = req.body.name;
    res.cookie("Login", name, {path: "/"});
    res.send(`Hello ${name}`);
});

test("Test Cookie Read", async () => {
    const response = await request(app).get("/")
                            .set('Cookie', "name=ibnudirsan;author=rumahdev");
    expect(response.text).toBe("Hello ibnudirsan");
});

test("Test Cookie Write", async () => {
    const response = await request(app).post("/login")
                            .send({name : "ibnudirsan"});
    expect(response.get("Set-Cookie").toString()).toBe("Login=ibnudirsan; Path=/");
    expect(response.text).toBe("Hello ibnudirsan");
});