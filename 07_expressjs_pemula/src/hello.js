import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Word');
});

app.get('/ibnudirsan', (req, res) => {
    res.send('Hello Ibnudirsan');
});

app.listen(3100, () => {
    console.log(`Server Started on Port 3100`);
});