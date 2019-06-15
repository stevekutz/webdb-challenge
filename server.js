const express = require('express');
const helmet = require('helmet');

const ProjectsRouter = require('./projects/projects-router.js');
const ActionsRouter = require('./actions/actions-router.js');

const server = express();
server.use(express.json());
server.use(helmet());

server.use('/api/projects', ProjectsRouter);
server.use('/api/actions', ActionsRouter);

server.get('/', (req, res) => {
    res.send(`<h2>API Perstistence Sprint !!! </h2>`)
  });

module.exports = server;