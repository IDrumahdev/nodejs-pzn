import express from 'express';
import request from 'supertest';

const app = express();

app.get('/products/:id', (req, res) => {
    const idproduct = req.params.id;
    res.send(`Products ${idproduct}`);
});

app.get('/categories/:id(\\d+)', (req, res) => {
    const idcategori = req.params.id;
    res.send(`Category ${idcategori}`);
});

test("Test Route Parameter", async () => {
    let response = await request(app).get("/products/ibnudirsan");
    expect(response.text).toBe("Products ibnudirsan");

    response = await request(app).get("/products/salah");
    expect(response.text).toBe("Products salah");

    response = await request(app).get("/categories/1234");
    expect(response.text).toBe("Category 1234");

    response = await request(app).get("/categories/salah");
    expect(response.status).toBe(404);
});