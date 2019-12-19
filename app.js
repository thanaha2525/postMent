const express = require("express");
const app = express();
const authRouter = require("./routes/auth");
const homeRouter = require("./controllers/home-controller");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
/*const db = require("./db/connect");
app.use(db);*/

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
app.use(authRouter);

app.get("/", homeRouter);

const PORT = process.env.port || 3003;
app.listen(PORT, function(err) {
  if (!err) {
    console.log(`App Listen in http://localhost:${PORT}`);
  } else {
    console.log(`Can't Listen in http://localhost:${PORT} err ${err}`);
  }
});
