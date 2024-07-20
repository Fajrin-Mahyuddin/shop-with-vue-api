import "dotenv/config";
import express from "express";
import privateRoute from "@/app/router/private_route";
import publicRoute from "@/app/router/public_route";
import errorHandling from "@/app/middlewares/error_handling";
import defaultErrorHandling from "@/app/middlewares/default_error_handling";
import cors from "cors";
const app = express();
const port = process.env.NODE_BE_PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/v1", publicRoute);
// app.use(privateRoute);

app.use(errorHandling);
app.use(defaultErrorHandling);

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
