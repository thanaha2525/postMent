const login = (req, res, next) => {
  res.send("login Screen");
};

module.exports = login;

const logout = (req, res, next) => {
  res.clearCookie("token");
  res.send("home");
};

module.exports.logout = logout;
 