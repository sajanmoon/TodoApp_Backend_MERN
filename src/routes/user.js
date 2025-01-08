const express = require("express");
const User = require("../models/user");

const authRouter = express.Router();

authRouter.post("/signup", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.send("signup succesfully");
  } catch (error) {
    res.status(400).send("signup failed", error);
  }
});

module.exports = authRouter;
