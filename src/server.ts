import express from "express";
import config from "config";
import logger from "./utils/logger";
import Router from "./router";

const server = express();

const PORT = config.get<number>("port") | 5000 | 8000;

Router(server)

server.listen(PORT, () => logger.info(`Server running on ${PORT}`));
