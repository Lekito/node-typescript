import express from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path'; 
import { errors } from 'celebrate';

const app = express();

app.use(cors()); // permita que qualquer domínio acesse essa api. ideal para ambiente de desenvolvimento. 

// app.use(cors({
//    origin: ['dominio.com.br', 'alexdeveloper.com.br'] // permite só esses dois domínios acessarem a api. Ideal para ambiente de produção.
// }));

app.use(express.json());

app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads'))); // rota estatica

app.use(errors()); // necessario para gerar os erros que o celebrate de acordo com o que recebeu na requisição. 

app.listen(3333, () => {
    console.log('Server started on port 3333! Ctrl + c for exit.');
});