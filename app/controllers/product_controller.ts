import { Response, Request, NextFunction } from "express";
import productService from "@/app/services/product_service";
import { IProduct } from "@/app/types/product.type";

const get_product = async (_: Request, res: Response, next: NextFunction) => {
  try {
    const lists = await productService.lists();
    res.status(200).json(lists).end();
  } catch (error) {
    console.log("new error", error);
    return next(error);
  }
};

const add_product = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req.body as IProduct;
    const save = await productService.create(data);
    res.status(200).json(save).end();
  } catch (error) {
    return next(error);
  }
};

const update_product = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body as IProduct & { _id: string };
    const save = await productService.update(data);
    res.status(200).json(save).end();
  } catch (error) {
    return next(error);
  }
};

export default {
  get_product,
  add_product,
  update_product,
};
