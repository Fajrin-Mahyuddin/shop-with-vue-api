import bcrypt from "bcrypt";
import AppError from "@/app/libs/error";

export const hassPassword = async (pass: string) => {
  try {
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    return await bcrypt.hash(pass, salt);
  } catch (error) {
    throw new AppError(500, "hash password failed");
  }
};
