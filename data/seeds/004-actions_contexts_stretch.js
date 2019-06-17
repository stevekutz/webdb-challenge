
exports.seed = async function(knex) {
  await knex('actions_contexts').insert([
        {id: 1, action_id: 1, context_id: 4},
        {id: 2, action_id: 1, context_id: 2},
        {id: 3, action_id: 3, context_id: 3},
        {id: 4, action_id: 5, context_id: 1},
        {id: 5, action_id: 2, context_id: 4},
        {id: 6, action_id: 4, context_id: 4},
        {id: 7, action_id: 2, context_id: 1},
        {id: 8, action_id: 5, context_id: 5},
        {id: 9, action_id: 6, context_id: 5},
        {id: 10, action_id: 6, context_id: 2},
        {id: 11, action_id: 6, context_id: 4},
        {id: 12, action_id: 5, context_id: 4},
        {id: 13, action_id: 5, context_id: 2},
        {id: 14, action_id: 2, context_id: 2},
        {id: 15, action_id: 7, context_id: 1},
        {id: 16, action_id: 7, context_id: 2},
        {id: 18, action_id: 7, context_id: 3},
        {id: 19, action_id: 7, context_id: 4},
        {id: 20, action_id: 7, context_id: 5},
  ]);
};
