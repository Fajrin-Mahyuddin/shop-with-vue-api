import User from "@/app/models/users_model";
import AppError from "@/app/libs/error";
import { IUsers } from "@/app/types/user.type";

const lists = async () => {
  const query = User.find();

  if (!query) {
    throw new AppError(403, "Not Found!");
  }

  return query;
};

const create = async (data: IUsers) => {
  const save = new User(data);
  const isValid = save.validateSync();

  if (isValid) {
    throw new AppError(403, isValid.message);
  }
  if (!save) {
    throw new Error("saving failed");
  }

  return await save.save();
};

//const edit = async
export default {
  lists,
  create,
};
