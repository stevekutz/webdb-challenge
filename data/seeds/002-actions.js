
exports.seed = async function(knex) {
  await knex('actions').insert([
    {id: 1, description: 'Create a forked copy of this project', notes: 'Surprise! There is no boilerplate for you on this project.', project_id: 1},
    {id: 2, description: 'Answer Self Study questions', notes: 'Demonstrate your understanding of this week\'s concepts by answering the following free-form questions', project_id: 1},
    {id: 3, description: 'Setup SQL Lite Studio', notes: 'This thing is sometimes buggy, disonnect-connect db as needed', project_id: 2},
    {id: 4, description: 'Setup dbDesigner', notes: 'get free Ultimate membership', project_id: 2},
    {id: 5, description: 'Communicate concepts', notes: 'Super important to be able to clearly explain anything to others', project_id: 2},
    {id: 6, description: 'Compare & Contrast', notes: 'A good method to explain how well you understand details', project_id: 3},
    {id: 7, description: 'Start Networking NOW!', notes: 'Greatly improve your chances to find that dream job', project_id: 4}
  ]);
};
