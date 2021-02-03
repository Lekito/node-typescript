import Knex from 'knex'; // importando o tipo. Para importar o tipo começamos com letra maiúscula 

export async function up(knex: Knex) {
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('image').notNullable();    
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('items');
}