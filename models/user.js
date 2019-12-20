const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  location: { type: String, required: true },
  created: { type: String },
  lastLogin: { type: String }
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model("User", userSchema);
