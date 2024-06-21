const mongoose = require("mongoose");
const User = require("./user");

mongoose.connect("mongodb://localhost:27017/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

const user = new User({
  username: "Leap Toddler",
  progress: {
    alphabet: {
      A: true,
      B: true,
      C: true,
      D: true,
      E: true,
      F: true,
      G: true,
      H: true,
      I: true,
      J: true,
      K: true,
      L: true,
      M: true,
      N: true,
      O: true,
      P: true,
      Q: true,
      R: true,
      S: true,
      T: true,
      U: true,
      V: true,
      W: true,
      X: true,
      Y: true,
      Z: true
    },
    games: {
      matching: 10,
      letterHunt: 5,
      puzzles: 2
    }
  }
});

user.save((err, user) => {
  if (err) {
    console.log(err);
  } else {
    console.log(user);
  }
});
