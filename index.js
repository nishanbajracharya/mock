const jsonServer = require('json-server');
const dotenv = require('dotenv');

dotenv.config();

const generateData = require('./data');

const count = process.env.DATA_COUNT;
const seed = process.env.DATA_SEED;

const data = generateData(Number(count), Number(seed));

const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8000;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running at Port: ${port}`);
});
