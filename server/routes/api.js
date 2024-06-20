const express = require("express");
const router = express.Router();
const User = require("../models/User");

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

module.exports = router;
