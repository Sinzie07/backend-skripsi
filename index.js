const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const uri =
  "mongodb+srv://sinziewinata:sinziewinata546@cluster0.b2xfwve.mongodb.net/?retryWrites=true&w=majority";

// Function to connect into mongoose
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(uri);

    console.log("Connected to database");
  } catch (error) {
    console.log(error);
  }
};

// Connect into database
connectDB();

// Start the application
const app = express();

app.use(cors());

// Parse requests of content-type: application/json
app.use(bodyParser.json());

// Parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//  Import route
const userRoutes = require("./routes/user_routes");
const resultRoutes = require("./routes/result_routes");

// Use route
app.use("/api/results", resultRoutes);
app.use("/api/user", userRoutes);

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
