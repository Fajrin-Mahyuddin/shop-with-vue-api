import { Response, Request, NextFunction } from "express";
import AppError from "@/app/libs/error";

const errorHandling = (
  err: Error | AppError,
  _: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!err) {
    next();
  }
  if (err instanceof AppError) {
    res.status(err.statusCode).json({ message: err.message }).end();
  } else {
    res.status(500).json({ message: err.message }).end();
  }
};

export default errorHandling;
