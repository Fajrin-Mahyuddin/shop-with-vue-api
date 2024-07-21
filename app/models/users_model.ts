import mongoose from "@/app/configs/dbconnect";
import { IUsers } from "@/app/types/user.type";

const Schema = mongoose.Schema;

const userSchema = new Schema<IUsers>(
  {
    name: { type: String },
    email: { type: String, required: [true, "email required !"] },
    password: {
      type: String,
      minlength: [14, "Minimum password allowed are 14 !"],
    },
    images: { type: String },
    phone: { type: Number },
  },
  { timestamps: true },
);

const User = mongoose.model<IUsers>("User", userSchema);
export default User;
