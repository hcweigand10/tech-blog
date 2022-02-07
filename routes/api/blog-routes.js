const router = require("express").Router();
const getAllBlogs = require("../../controllers/blog-controllers.js");

router.get("/", getAllBlogs);

module.exports = router;

