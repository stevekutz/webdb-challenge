// Since module.exports is the object that's actually returned 
// as the result of a require call, we simply call server.js
// in order to access the server object that was defined 
// along with the middleware functions defined in server.js
const server = require('./server');

// define default port if not assigned in env
const PORT = process.env.PORT || 3333;

/*
// without ROUTER
//  >>> define helper function path
const Projects  = require('./projects/projects-model');

// >>> use Promises to resolve returned project data
server.get('/api/projects', (req, res) => {
  console.log("USING Promises in index.js");
  Projects.getProjects()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => res.send(err))

})
*/

// Binds and listens for connections on the specified host and port.
server.listen(PORT, function() {
  console.log(`Persistence Sprint on port http://localhost:${PORT} `);
});

