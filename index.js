const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoutes = require("./routes/index");
const authRoutes = require("./routes/auth");

const CONNECTION_URL = `mongodb://localhost:27017/mernFb`;
mongoose.connect(
  CONNECTION_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connected to MongoDB");
  }
);

//middlware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

//routes
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(8800, () => {
  console.log("Server is running on port 8800");
});
