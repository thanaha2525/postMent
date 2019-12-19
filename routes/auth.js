const express = require("express");
const router = express.Router();
const loginController = require("../controllers/login-controller");
const registerController = require("../controllers/register-controller");

router.get("/login", loginController);
router.get("/register", registerController);

module.exports = router;
