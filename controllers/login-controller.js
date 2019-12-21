const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = (req, res, next) => {
  res.send("login Screen");
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
    const status = { status: "cannotlogin", screen: "login" };
    res.send(status);
  }
  return;
};

const dataObj = {
  username: req.body.username,
  password: req.body.password
};

const getUserData


const logout = (req, res, next) => {
  res.clearCookie("token");
  res.send("home");
};

module.exports.logout = logout;
