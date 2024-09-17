
exports.seed = async function(knex) {
  await knex('contexts').insert([
        {id: 1, name: 'home'},
        {id: 2, name: 'lab'},
        {id: 3, name: 'classroom'},
        {id: 4, name: 'gym'},
        {id: 5, name: 'store'}
  ]);
};

