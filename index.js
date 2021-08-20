const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const config = require("./server/config");

dotenv.config(); // load .env file

const CONNECTION_STRING = `mongodb://${config.db.url}/${config.db.name}`;

mongoose.connect(CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongo has connected succesfully");
});

app.listen(8800, () => {
  console.log("Server is running on port 8800");
});
