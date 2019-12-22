const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const postMentSchema = mongoose.Schema({
  postCout: { type: Number, unique: true, require: true },
  postBy: { type: String, require: true },
  title: { type: String, require: true },
  content: { type: String, require: true },
  category: { type: String, require: true },
  tag: [String],
  created: { type: String },
  like: { type: Number },
  status: { type: String },
  rate: { type: Number },
  view: { type: Number },
  locationPost: {
    type: Object,
    properties: {
      lat: { type: Float32Array },
      long: { type: Float32Array }
    }
  }
});

postMentSchema.plugin(uniqueValidator);
module.exports = mongoose.model("PostMent", postMentSchema);
