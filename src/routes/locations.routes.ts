import { Router } from 'express';
import knex from '../database/connection';

const locationsRouter = Router();

locationsRouter.post('/', async(request, response) => {
    const {
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
        items
    } = request.body;

    const location = {
        image: "fake-image.jpg",
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf
    };

    const transaction = await knex.transaction(); // transformando os dois comandos insert num único processo.

    
    const newIds = await transaction('locations').insert(location); // primeiro insert

    const location_id = newIds[0];

    const locationItems = items.map(async (item_id: number) => { // map serve para percorrer um Array
        const selectedItem = await transaction('items').where('id', item_id).first();// first serve para selecionar um registro. 

        if(!selectedItem) {
            return response.status(400).json({message: 'Item not found.'})
        }
        
        return {
            item_id,
            location_id
        }
    });

    await transaction('location_items').insert(locationItems); // segundo insert

    await transaction.commit(); // fim. transformando os dois comandos insert num único processo.

    return response.json({
        id: location_id,
        ...location // spread operator representado com os "...", ele tras todo o conteúdo do objeto LOCATION. 
    });
});

export default locationsRouter;