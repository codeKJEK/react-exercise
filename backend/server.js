const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const DATABASE = process.env.MONGODB_URI || "mongodb://localhost/MongoSetup";

mongoose.connect(DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () =>
  console.log(`--> SERVER.JS: Connected to ${DATABASE}`)
);
mongoose.connection.on("error", (err) => {
  console.log(`Mongoose connection err:\n${err}`);
});

app.use("/exercises", require("./routes/exercises"));
app.use("/users", require("./routes/users"));

app.listen(PORT, () => {
  console.log(`--> SERVER.JS: Server Running: http://localhost:3000/`);
});
