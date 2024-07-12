import { IProduct } from "@/app/types/product.type";
import ProductModel from "@/app/models/product_model";
import AppError from "@/app/libs/error";

const create = async (data: IProduct) => {
  if (!data) {
    throw new Error("data empty");
  }
  const save = new ProductModel(data);
  const isValid = save.validateSync();
  // console.log("++++", save, "validateeee", isValid)
  if (isValid) {
    throw new AppError(400, isValid.message);
  }
  if (!save) {
    throw new Error("saving failed!");
  }
  return await save.save();
};

const lists = async () => {
  const query = ProductModel.find();
  if (!query) {
    throw new Error("Query failed!");
  }
  return query;
};

const update = async (data: IProduct & { _id: string }) => {
  const req = ProductModel.findByIdAndUpdate({ _id: data._id }, data);
  if (!req) {
    throw new Error("Update failed!");
  }
  return { message: "Update success!" };
};

export default {
  create,
  lists,
  update,
};
