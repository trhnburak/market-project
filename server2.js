const jsonServer = require('json-server');


const server = jsonServer.create();
const router2 = jsonServer.router('companies.json');


const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;

server.use(middlewares);
server.use(router2);

console.log(port)
server.listen(port);

