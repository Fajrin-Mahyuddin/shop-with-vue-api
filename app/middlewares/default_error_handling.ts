import { Response } from "express";

const defaultErrorHandling = (_: unknown, res: Response) => {
  res.status(404).json({ message: "Not Found!" }).end();
};

export default defaultErrorHandling;
