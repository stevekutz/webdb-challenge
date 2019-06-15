// Using Jason async , await method from vid here
exports.up = async function(knex) {
    await knex.schema.createTable('projects', tbl => {
      tbl.increments('id');
      tbl.string('name').notNullable();
      tbl.string('description').notNullable();
      tbl.boolean('completed').defaultTo(false);   // nice default option
    })
  
    await knex.schema.createTable('actions', tbl => {
      tbl.increments('id');
      tbl.string('description').notNullable();
      tbl.string('notes').notNullable();
      tbl.boolean('completed').defaultTo(false);
      tbl
          .integer('project_id')
          .references('id')
          .inTable('projects')
          .onDelete('RESTRICT')    // Luis recommends this
          .onUpdate('CASCADE')
          .notNullable();
    })
  };
  
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('actions')
      .dropTableIfExists('projects')
  };
