const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = (req, res, next) => {
  res.send({
    data: {
      pageName: "Login",
      message: "Please Login",
      loginStatus: false
    }
  });
};
module.exports = login;

const getUserData = async dataObj => {
  const user = await User.findOne({
    username: dataObj.username
  });
  if (!user) {
    return { id: null, username: null, loginStatus: false };
  } else {
    const result = await bcrypt.compare(dataObj.password, user.password);
    return { id: user._id, username: user.username, loginStatus: result };
  }
};

const postLogin = (req, res, next) => {
  if (!req.body.username || !req.body.password) {
    res.send({
      pageName: "Login",
      message: "Plaese Enter Username and Password",
      loginStatus: false
    });
    return;
  }

  const dataObj = {
    username: req.body.username,
    password: req.body.password
  };

  getUserData(dataObj)
    .then(result => {
      if (result.loginStatus == true) {
        const token = jwt.sign(
          {
            id: result.id,
            username: result.username,
            loginStatus: true
          },
          "SECRETKEY",
          { expiresIn: 60 * 1 }
        );
        res.setHeader("set-Cookie", "token=" + token);
        res.send({
          data: {
            pageName: "home",
            message: "",
            class: "alert alert-primary",
            username: result.username,
            loginStatus: true
          }
        });
      } else {
        res.send({
          data: {
            pageName: "login",
            message: "Username or Password Not Curect",
            class: "alert alert-danger",
            loginStatus: false
          }
        });
      }
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports.postLogin = postLogin;

const logout = (req, res, next) => {
  res.clearCookie("token");
  res.send("home");
};

module.exports.logout = logout;
