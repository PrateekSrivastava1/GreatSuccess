const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

const bcrypt = require("bcrypt");
const e = require("express");

// update user credentials

router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );

      //   filtering password
      const { password, ...others } = updatedUser._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res
      .status(401)
      .json("I know, this is not your account, now get lost M**F**er");
  }
});

// delete user credentials

router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    const user = await User.findById(req.params.id);
    if (user) {
      try {
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("user has been deleted :'/  ");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(404).json("User not found");
    }
  } else {
    res
      .status(401)
      .json("I know, this is not your account, now get lost M**F**er");
  }
});

// find user

router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    try {
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(500).json("User not found... :p");
  }
});

module.exports = router;
