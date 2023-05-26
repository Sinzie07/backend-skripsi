const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
