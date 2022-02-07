const router = require("express").Router();
const Blog = require("../models/blog");

// get all
// router.get('/', async (req, res) => {
//   const allBlogs = await Blog.findAll()
//   const plainData = allBlogs.map(blogObj=>blogObj.get({plain:true}))
//   res.render("main",{blogs:plainData})
// })
const getAllBlogs = async (req, res) => {
  const allBlogs = await Blog.findAll();
  const plainData = allBlogs.map((blogObj) => blogObj.get({ plain: true }));
  res.render("main", { blogs: plainData });
};

app.listen(app.get("port"), (server) => {
  console.info(`Server listening on port ${app.get("port")}`);
});

// get one blog with serialized data
router.get("/blog/:id", async (req, res) => {
  try {
    // Search the database for a blog with an id that matches params
    const blogData = await blog.findByPk(req.params.id);
    console.log(blogData);
    console.log("================");
    // We use .get({ plain: true }) on the object to serialize it so that it only includes the data that we need.
    const blog = blogData.get({ plain: true });
    console.log(blog);
    // Then, the 'blog' template is rendered and blog is passed into the template.
    res.render("blog", blog);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

module.exports = getAllBlogs;
