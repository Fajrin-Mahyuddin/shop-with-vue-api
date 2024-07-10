import express, { Request, Response } from "express";

const router = express.Router();

router.get("/login", (_: Request, res: Response) => {
  res.status(200).json({ message: "login!" });
});

export default router;
