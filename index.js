const server = require('./server');

const PORT = process.env.PORT || 3333;

server.listen(PORT, function() {
  console.log(`Listening on port http://localhost:${PORT} `);
});

