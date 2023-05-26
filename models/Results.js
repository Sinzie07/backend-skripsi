const mongoose = require("mongoose");

const ResultSchema = mongoose.Schema({
  alternatif: {
    type: String,
  },
  bobot_alternatif: {
    type: String,
  },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Result = mongoose.model("Result", ResultSchema);

module.exports = Result;
