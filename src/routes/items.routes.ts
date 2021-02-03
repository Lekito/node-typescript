import { Router } from 'express';
import knex from '../database/connection';

const itemsRouter = Router();

itemsRouter.get('/', async(request, response) => {
    const items = await knex('items').select('*'); // acessar a tabela para trazer a lista toda.

    const serializedItems = items.map(item => { // acessar o caminho aonde estão as imagens.
        return {
            id: item.id,
            title: item.title, 
            image_url: `http://localhost:3333/uploads/${item.image}`
        }
    });
    
    return response.json(serializedItems);
});

export default itemsRouter;