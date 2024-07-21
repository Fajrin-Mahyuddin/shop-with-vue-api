import { logger } from "@/app/libs/logging";
import userService from "@/app/services/user_service";
import { NextFunction, Request, Response } from "express";
import { IUsers } from "@/app/types/user.type";
import bcrypt from "bcrypt";
import AppError from "../libs/error";
import { hassPassword } from "../utils/hash_password";

const get_users = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const query = await userService.lists();
    console.log(query);
    res.status(200).json(req.params);
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

const add_user = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.body as IUsers;
    const newPass = await hassPassword(user.password);
    user.password = newPass;
    const save = await userService.create(user);
    res.status(200).json(save).end();
  } catch (error) {
    return next(error);
  }
};

const update_user = async (_: Request, res: Response) => {
  const tes: { name: String; phone: Number } = { name: "fajrin", phone: 12345 };
  return res.status(200).json(tes);
};

export default {
  get_users,
  add_user,
  update_user,
};
