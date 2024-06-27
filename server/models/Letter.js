const mongoose = require("mongoose");

const letterSchema = new mongoose.Schema({
  letter: { type: String, required: true },
  sound: { type: String, required: true },
  examples: [String],
  image: String,
});

module.exports = mongoose.model("Letter", letterSchema);
