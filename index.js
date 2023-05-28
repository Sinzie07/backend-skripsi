const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const serverless = require("serverless-http");

const express = require("express");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to the MongoDB database
const uri =
  "mongodb+srv://sinziewinata:sinziewinata546@cluster0.b2xfwve.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to the database"))
  .catch((error) => console.error("Database connection error:", error));

// Import routes
const userRoutes = require("./routes/user_routes");
const resultRoutes = require("./routes/result_routes");

// Use routes
app.use("/api/results", resultRoutes);
app.use("/api/user", userRoutes);

// App listen
app.listen(() => {
  console.log(`Server is running on port 5000`);
});
