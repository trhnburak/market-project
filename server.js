const jsonServer = require('json-server');
const express = require('express');
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router('items.json');
const router2 = jsonServer.router('companies.json');
const app = express();

app.use(cors())

const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
server.use(router2);


server.listen(port);
