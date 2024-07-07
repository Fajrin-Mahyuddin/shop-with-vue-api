const express = require("express");
const app = express();
const port = process.env.PORT;
const user_router = require("./router/users/userRoute.js");

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ oke: "fajrin" });
});

app.use("/users/", user_router);

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
