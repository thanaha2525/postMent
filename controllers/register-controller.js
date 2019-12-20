const bcrypt = require("bcryptjs");
const User = require("../models/user");

let ts = Date.now();

let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();

const time = `${date}-${month}-${year}`;
const createUser = async userObj => {
  const passwordhash = await bcrypt.hash(userObj.password, 10);
  const user = new User({
    username: userObj.username,
    email: userObj.email,
    password: passwordhash,
    location: userObj.location,
    created: time,
    lastLogin: time
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

  const lat = req.body.lat;
  const long = req.body.long;
  const location = { lat, long };

  const userObj = {
    username: username,
    email: email,
    password: password,
    location: location
  };
  createUser(userObj)
    .then(rs => {
      const success = "Register Success";
      res.send(rs);
    })
    .catch(err => {
      const success = `Register fail ${err}`;
      res.json({ status: success });
    });
};
module.exports.postRegister = postRegister;
