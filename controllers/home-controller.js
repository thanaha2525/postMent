const jwt = require("jsonwebtoken");
const home = (req, res, next) => {
  try {
    const token = req
      .get("Cookie")
      .split("token=")[1]
      .trim();
    const user = jwt.verify(token, "SECRETKEY");
    res.send({
      data: {
        pageName: "home",
        username: user.username,
        loginStatus: user.loginStatus
      }
    });
  } catch (error) {
    res.send({
      data: {
        pageName: "Login",
        message: "Plase login"
      }
    });
  }
};
module.exports = home;
