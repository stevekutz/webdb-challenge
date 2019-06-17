const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    getActions,
    addAction,
    getAction,
    updateAction,
    deleteAction
};

function getActions() {
    return db('actions');
}


function addAction(action) {
    return db('actions')
      .insert(action)
      .then(ids => ({id: ids[0]}));
}

/*
async function getAction(id) {
    const actions =  await db.select('*')
        .from('actions as a')
        .where('a.id', Number(id));
    
    if(actions) {
        const result = {...actions[0]};
        return result;
    } else {
        return actions[0];
    }
}
*/

// Now with contexts
async function getAction(id) {
    const actions =  await db.select('*')
        .from('actions as a')
        .where('a.id', id);
    // console.log(actions);

    const contexts = await db.select('c.id', 'c.name')
        .from('actions_contexts as a_c')
        .join('contexts as c', 'c.id', 'a_c.context_id')
        .where('a_c.action_id', id)
        .orderBy('c.id');
    console.log(">>>>>>>   ", contexts);

    if(actions) {
        const result = {...actions[0], contexts: contexts};
        return result;
    } else {
        return actions[0];
    }
}


async function updateAction(id, actionChanges) {
    return db('projects')
        .where({id})
        .update(actionChanges);
}
// work in progress
async function deleteAction(id) {
    return db('projects')
        .where({id})
        .del();

}