const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  location: {
    type: Object,
    properties: {
      lat: { type: Float32Array },
      long: { type: Float32Array }
    }
  },
  created: { type: String },
  lastLogin: { type: String }
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model("User", userSchema);
