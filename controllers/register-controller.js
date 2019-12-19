const bcrypt = require("bcryptjs");
const User = require("../models/user");

const createUser = async userObj => {
  const passwordhash = await bcrypt.hash(userObj.password, 10);
  const user = new User({
    username: userObj.username,
    email: userObj.email,
    password: passwordhash
  });
  const data = await user.save();
  return data;
};

const register = (req, res, next) => {
  res.json("Register Screen");
};

module.exports = register;

const postRegister = (req, res, next) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const userObj = {
    username: username,
    email: email,
    password: password
  };
  createUser(userObj)
    .then(() => {
      const success = "Register Success";
      res.send({
        status: success,
        username: username,
        email: email,
        password: password
      });
    })
    .catch(err => {
      const success = `Register fail ${err}`;
      res.json({ status: success });
    });
};
module.exports.postRegister = postRegister;
