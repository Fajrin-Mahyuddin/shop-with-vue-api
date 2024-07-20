import winston, { format } from "winston";

export const logger = winston.createLogger({
  format: format.combine(format.timestamp(), format.prettyPrint()),
  transports: [
    new winston.transports.File({
      filename: "./logs/error.log",
      level: "info",
    }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(new winston.transports.Console({}));
}
