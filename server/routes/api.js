const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

router.get("/greeting", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

router.post("/update-progress", (req, res) => {
  const { username, progress } = req.body;
  User.findOneAndUpdate(
    { username },
    { $set: { progress } },
    { new: true, upsert: true },
    (err, user) => {
      if (err) return res.status(500).send(err);
      return res.status(200).send(user);
    }
  );
});

router.get("/users/:username/progress", (req, res) => {
  const { username } = req.params;
  User.findOne({ username }, (err, user) => {
    if (err) return res.status(500).send(err);
    if (!user) return res.status(404).send({ message: "User not found" });
    return res.send(user.progress);
  });
});

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

router.get("/users", (req, res) => {
  User.find({}, (err, users) => {
    if (err) return res.status(500).send(err);
    return res.send(users);
  });
});

module.exports = router;
