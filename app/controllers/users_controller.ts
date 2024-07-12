import { Request, Response, NextFunction } from "express";
import { logger } from "@/app/libs/logging";

const get = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.params.params === "fajrin") {
      throw "static params";
    } else {
      res.status(200).json(req.params);
    }
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

export default {
  get,
};
