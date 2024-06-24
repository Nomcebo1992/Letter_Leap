const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const apiRoutes = require("./routes/api");
const app = express();
const port = 5000;

const MONGODB_URI =
  "mongodb+srv://dbTholoana:qYGq7cAe%23%2AJu7WX@letterleap.ue5imbh.mongodb.net/?retryWrites=true&w=majority&appName=LetterLeap";

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.use(cors());
app.use(express.json());
app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
