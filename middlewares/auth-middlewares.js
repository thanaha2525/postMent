const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  try {
    const token = req
      .get("Cookie")
      .split("token=")[1]
      .trim();
  } catch (err) {
    res.status(201);
    res.json("login");
  }
};
