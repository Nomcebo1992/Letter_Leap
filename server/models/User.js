const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  progress: {
    alphabet: {
      A: Boolean,
      B: Boolean,
      // ...
      Z: Boolean,
    },
    games: {
      matching: Number,
      letterHunt: Number,
      puzzles: Number,
    },
  },
});

module.exports = mongoose.model("User", userSchema);
