const mongoose = require("mongoose");
const User = require("../User");

const MONGODB_URI =
  "mongodb+srv://dbTholoana:qYGq7cAe%23%2AJu7WX@letterleap.ue5imbh.mongodb.net/?retryWrites=true&w=majority&appName=LetterLeap";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
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
      Z: true,
    },
    games: {
      matching: 10,
      letterHunt: 5,
      puzzles: 2,
    },
  },
});

user.save((err, user) => {
  if (err) {
    console.log(err);
  } else {
    console.log(user);
  }
});
