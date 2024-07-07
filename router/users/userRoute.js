var express = require("express");
var router = express.Router();

router.get("/lists", (_, res) => {
  res.status(200).json({
    name: "fajrin",
  });
});

router.post("/add", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  console.log(req.body);
  res.status(200).json(req.body);
});

module.exports = router;
