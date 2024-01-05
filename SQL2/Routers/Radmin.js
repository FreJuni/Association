const express = require("express");
const router = express.Router();

const postController = require("../Controllers/CPost");

router.get("/post-form", postController.renderPostForm);

router.post("/", postController.createPost);

router.get("/delete/:id", postController.deletePost);

router.get("/edit-post/:id", postController.getOldPost);

router.post("/update-post", postController.updatedPost);

module.exports = router;
