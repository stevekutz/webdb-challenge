// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
    filename: './data/sprintProjects.db3',   
    },
    useNullAsDefault: true, // needed for sqlite

    // to make separate folders for migrations & seeds
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
  }  

};
