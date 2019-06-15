const express = require('express');
const helmet = require('helmet');

// placeholder for routers
const ProjectsRouter = require('./projects/projects-router');
const ActionsRouter = require('./actions/actions-router');


// build mini-app
const server = express();

// call out GLOBAL middleware
server.use = (helmet());
server.use = (express.json());

// define endpoints
server.use = ('./api/projects', ProjectsRouter);
server.use = ('/.api/actions', ActionsRouter);


// SANITY CHECK endpoint
server.get('/', (req,res)=> {
    res.send(`<h3> API Persistence SPRINT , whoooooo!!! </h3>`)
})

// DON'T FORGET THIS !!!
module.exports = server;