const mongoose = require("mongoose");
const db = () => {
  mongoose
    .connect(
      "mongodb+srv://chalunton:Tha0897451740@cluster0-stino.mongodb.net/test?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
      }
    )
    .then(() => {
      console.log("Connected Database Success");
    })
    .catch(err => {
      console.log(`Connected Database Fail ${err}`);
    });
};

module.exports = db;
