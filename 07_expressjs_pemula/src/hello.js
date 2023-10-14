import express from 'express';

const app = express();

app.get('/', (request, response) => {
    response.send('Hello Word');
});

app.get('/ibnudirsan', (request, response) => {
    response.send('Hello Ibnudirsan');
});

app.listen(3100, () => {
    console.log(`Server Started on Port 3100`);
});