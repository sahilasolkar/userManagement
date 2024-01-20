const express = require("express");
const route = express.Router();
const { User } = require("../models/User");
const { userModelValidator } = require("../utils/middlewares");

route.post("/create", userModelValidator, async (req, res) => {
  try {
    const createdUser = await User.create({
      firstName,
      lastName,
      age,
    });
    res.status(200).json(createdUser);
  } catch {
    () => {
      res.status(500).send("failed to create user");
    };
  }
});

route.get("/", async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});

route.put("/update/:id", userModelValidator, async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).send("id required");
    return;
  }
  try {
    const user = await User.findByPk(id);
    if (user === null) {
      res.status(404).send("user id invalid");
      return;
    } else {
      const updatedUser = await User.update(
        {
          firstName,
          lastName,
          age,
        },
        { where: { id } }
      );
      res.status(200).json({ updatedUser: req.body, user });
    }
  } catch {
    () => {
      res.status(500).send("failed to update user");
    };
  }
});

route.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (user === null) {
      res.status(404).send("user id invalid");
      return;
    } else {
      const deletedUser = await User.destroy({ where: { id } });
      res.status(200).json({ deletedUser: user });
    }
  } catch {
    () => {
      res.status(500).send("failed to delete user");
    };
  }
});

exports.userRoute = route;
