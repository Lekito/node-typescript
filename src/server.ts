import express from 'express';
import routes from './routes';
import path from 'path'; 

const app = express();

app.use(express.json());

app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads'))); // rota estatica

app.listen(3333, () => {
    console.log('Server started on port 3333! Ctrl + c for exit.');
});