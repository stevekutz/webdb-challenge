
exports.seed = async function(knex) {
  await knex('projects').insert([
        {id: 1, name: 'Introduction to Relational Databases and SQL', description: 'Learn to explain what a Relational Database is and its core components.'},
        {id: 2, name: 'SQL exercises',  description: 'SQL is a standard, that means that most RDBMS will support a set of core commands'},
        {id: 3, name: 'Objective challenge', description: 'Use the internet to research two other types of databases (non-relational) and write a short paragraph for each describing how they are different from relational databases'},
        {id: 4, name: 'Career Readiness', description: 'DON\'T WAIT !! Lambda has tons of resources(https://learn.lambdaschool.com/course/cr) to get your ready to find that great job'}
      ]);
};
