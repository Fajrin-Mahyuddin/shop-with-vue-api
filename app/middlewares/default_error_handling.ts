import { Response } from "express";

const defaultErrorHandling = (_: unknown, res: Response) => {
  res.status(404).json({ message: "Url not found!" }).end();
};

export default defaultErrorHandling;
