import "dotenv/config";
import express from "express";
import privateRoute from "@/app/router/privateRoute";
import publicRoute from "@/app/router/publicRouter";

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use(publicRoute);
app.use(privateRoute);

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
