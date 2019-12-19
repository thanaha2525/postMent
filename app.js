const express = require("express");
const app = express();
const authRouter = require("./routes/auth");
const homeRouter = require("./controllers/home-controller");
const db = require("./db/connect");

app.use(db);
app.use(authRouter);

app.set(db);
app.get("/", homeRouter);

const PORT = process.env.port || 3003;
app.listen(PORT, function(err) {
  if (!err) {
    console.log(`App Listen in http://localhost:${PORT}`);
  } else {
    console.log(`Can't Listen in http://localhost:${PORT} err ${err}`);
  }
});
