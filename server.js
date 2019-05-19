
const bodyParser = require("body-parser");
const express = require("express");
const helmet = require("helmet");
const config = require("./config");
const path = require("path");
const server = express();
const router = express.Router();

server.use(helmet());
server.use(bodyParser.json());

server.use(router);

server.use("/", express.static(path.join(__dirname, "build")));

server.listen(config.port, config.host, () => {
  console.info("Express listening on port", config.port);
});