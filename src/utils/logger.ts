import winston from "winston";

const customFormatter = winston.format.printf(
  ({ level, message, timestamp }) =>
    `${timestamp} [${level.toUpperCase()}] ${message}`
);

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(winston.format.timestamp(), customFormatter),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs.log" }),
  ],
});

export default logger;
