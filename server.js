const jsonServer = require('json-server');


const server = jsonServer.create();
const router = jsonServer.router('items.json');


const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

console.log(port)
server.listen(port);

