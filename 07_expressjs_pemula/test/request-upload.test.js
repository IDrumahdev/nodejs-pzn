import express from 'express';
import request from 'supertest';
import expressFileUpload from 'express-fileupload';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extends : false}));
app.use(expressFileUpload());

app.post('/json', (req, res) => {
    const name = req.body.name;
    res.json({
        hello : `Hello ${name}`
    });
});

app.post('/form', (req, res) => {
    const name = req.body.name;
    res.json({
        hello : `Hello ${name}`
    });
});

app.post('/file', async (req, res) => {
    const textFile = req.files.article;
    await textFile.mv(__dirname + "upload"/ + textFile.name);

    res.end(`Hello ${req.body.name} , you uploaded ${textFile.name}`);
});

test("Test Request File Upload", async () => {
    const response = await request(app)
                            .post("/file")
                            .set('Content-Type',"multipart/form-data")
                            .field("name", "ibnudirsan")
                            .attach("article", __dirname + "/contoh.txt");

    expect(response.text).toBe("Hello ibnudirsan , you uploaded contoh.txt");
});

test("Test Request JSON", async () => {
    const response = await request(app)
                            .post("/json")
                            .set('Content-Type',"application/json")
                            .send({name : "word"});

    expect(response.body).toEqual({
        hello : `Hello word`
    });
});

test("Test Request FORM", async () => {
    const response = await request(app)
                            .post("/form")
                            .send("name=word");

    expect(response.body).toEqual({
        hello : `Hello word`
    });
});

