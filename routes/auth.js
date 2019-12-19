const express = require("express");
const router = express.Router();
const loginController = require("../controllers/login-controller");
const registerController = require("../controllers/register-controller");

router.get("/login", loginController);
router.get("/register", registerController);
router.post("/register", registerController.postRegister);

module.exports = router;
