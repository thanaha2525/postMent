const express = require("express");
const router = express.Router();
const loginController = require("../controllers/login-controller");
const registerController = require("../controllers/register-controller");
const authChecker = require("../middlewares/auth-middlewares");
const homeController = require("../controllers/home-controller");

router.get("/login", loginController);
router.get("/register", registerController);
router.post("/login", loginController.postLogin);
router.post("/register", registerController.postRegister);
router.get("/logout", loginController.logout);
router.get("/home", authChecker);

module.exports = router;
