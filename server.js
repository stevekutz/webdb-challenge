const express = require('express');
const helmet = requrie('helment');

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


// DON'T FORGET THIS !!!
module.exports = server;