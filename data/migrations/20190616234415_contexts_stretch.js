

exports.up = async function(knex) {
    await knex.schema.createTable('contexts', tbl => {
      tbl.increments('id');
      tbl.string('name').notNullable().unique();
    })
    await knex.schema.createTable('actions_contexts', tbl => {
      tbl.increments('id');
      tbl
          .integer('action_id')
          .references('id')
          .inTable('actions')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE')
          .notNullable();
      tbl
          .integer('context_id')
          .references('id')
          .inTable('contexts')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE')
          .notNullable();
      })
  };
  
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('actions_contexts')
    await knex.schema.dropTableIfExists('contexts')
  };