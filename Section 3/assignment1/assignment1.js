const http = require('http');
const route = require('./assignment1Route');
//create a server
const server = http.createServer(route.handler);

server.listen(3000);
