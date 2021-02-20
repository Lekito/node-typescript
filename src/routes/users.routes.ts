import { Router } from 'express';
import Knex from '../database/connection';

const usersRouter = Router();

usersRouter.get('/', async(request, response) => {
    const users = await Knex('users').select('*');

    return response.json(users);
} );

usersRouter.post('/', async (request, response) => {
    const { name, email, password } = request.body;
    
    const user = { name, email, password };

    const newIds = await Knex('users').insert(user);

    return response.json({
        id: newIds[0],
        ... user 
    });
});

export default usersRouter;