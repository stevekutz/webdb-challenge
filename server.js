
// Use require in NOde to import modules
// The keyword require returns an object, which 
// references the value of module.exports for a given file.
const express = require('express');
const helmet = require('helmet');

// define router paths
const ProjectsRouter = require('./projects/projects-router.js');
const ActionsRouter = require('./actions/actions-router.js');

// define express app as server
const server = express();  

// Mounts the specified middleware function(s)
//  at the specified path
server.use(express.json()); // It parses incoming requests with JSON payloads
server.use(helmet());   // Hides X-Powered-By →Express

// A router object is an isolated instance 
// of middleware and routes - like a mini-application
server.use('/api/projects', ProjectsRouter);
server.use('/api/actions', ActionsRouter);


// Access root sanity check that we access the express app as server
server.get('/', (req, res) => {
    res.send(`<h2>API Perstistence Sprint !!! </h2>`)
});


// module.exports is an object that the 
// current module returns when it is "required" in 
// index.js
module.exports = server;