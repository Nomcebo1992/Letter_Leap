const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Retrieve a user's progress
router.get("/users/:username/progress", (req, res) => {
  const { username } = req.params;
  User.findOne({ username }, (err, user) => {
    if (err) return res.status(500).send(err);
    if (!user) return res.status(404).send({ message: "User not found" });
    return res.send(user.progress);
  });
});

// Update a user's progress for a specific letter
router.patch("/users/:username/progress/letters/:letter", (req, res) => {
  const { username } = req.params;
  const { letter } = req.params;
  const { value } = req.body;
  User.findOneAndUpdate(
    { username },
    { $set: { [`progress.alphabet.${letter}`]: value } },
    { new: true },
    (err, user) => {
      if (err) return res.status(500).send(err);
      return res.send(user.progress);
    }
  );
});

// Update a user's progress for a specific game
router.patch("/users/:username/progress/games/:game", (req, res) => {
  const { username } = req.params;
  const { game } = req.params;
  const { value } = req.body;
  User.findOneAndUpdate(
    { username },
    { $set: { [`progress.games.${game}`]: value } },
    { new: true },
    (err, user) => {
      if (err) return res.status(500).send(err);
      return res.send(user.progress);
    }
  );
});

// Retrieve a list of all users
router.get("/users", (req, res) => {
  User.find({}, (err, users) => {
    if (err) return res.status(500).send(err);
    return res.send(users);
  });
});

module.exports = router;
