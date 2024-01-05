const express = require("express");
const postController = require("../Controllers/CPost");

const router = express.Router();

router.get("/", postController.getPosts);

router.get("/post-detail/:id", postController.postDetail);

module.exports = router;
