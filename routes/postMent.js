const express = require("express");
const router = express.Router();
const postController = require("../controllers/postMent-controller");

router.get("/post", postController);
router.post("/post", postController.postPostMent);

module.exports = router;
