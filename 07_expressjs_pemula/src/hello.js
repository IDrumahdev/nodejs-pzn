import express from 'express';

const app = express();

app.listen(3100, () => {
    console.log(`Server Started on Port 3100`);
});