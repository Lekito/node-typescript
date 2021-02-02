import express from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.json({ message: 'Olá dev!'});
})

app.listen(3333, () => {
    console.log('Server started on port 3333! Ctrl + c for exit.');
});