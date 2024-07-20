import mongoose from "mongoose";
import { logger } from "@/app/libs/logging";

const url = process.env.MONGO_URL || "";
const db = process.env.MONGO_DB || "";
const username = process.env.MONGO_INITDB_ROOT_USERNAME || "";
const password = process.env.MONGO_INITDB_ROOT_PASSWORD || "";

mongoose
  .connect(url, { dbName: db, user: username, pass: password })
  .then(() => console.info("db connected!"))
  .catch((err) => {
    logger.error(`DB failed to connect! and ${err}`);
    console.error("db failed to connect", err);
  });

if (process.env.NODE_ENV === "production") {
  mongoose.set("autoIndex", false);
}

export default mongoose;
