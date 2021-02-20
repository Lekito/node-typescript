import { Router } from 'express';
import knex from '../database/connection';

const sessionsRouter = Router();



sessionsRouter.post('/', async (request, response) => {
    const { email, password } = request.body;
    
    const user = await knex('users').where('email', email).first();

    if(!user) {
        return response.status(400).json({message:'Credentials not found.'})
    }
});

export default sessionsRouter;