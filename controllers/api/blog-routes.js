const router = require('express').Router();
const { Blog } = require('../../models');

// Get all blogs
router.get('/', async (req, res) => {
  try {
      const blogs = await Blog.findAll();
      res.json(blogs);
  } catch (error) {
      res.status(500).json(error);
  }
});

//Get post by ID
router.get('/:id', async (req, res) => {
  try {
      const blog = await Blog.findByPk(req.params.id);
      if (blog) {
          res.json(blog);
      } else {
          res.status(404).json({ message: "Blog not found" });
      }
  } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.post('/write', async (req, res) => {
  try {
    const newBlogData = await Blog.create({
      title: req.body.postTitle,
      blogcontent: req.body.content
    });
    res.status(201).json(newBlogData);
  }catch (err) {
    res.status(400).json(err);
  }
});

router.put('/write/:id', async (req, res) => {
  try{
    const updateBlogData = await Blog.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(updateBlogData);
  }catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const noBlogData = await Blog.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!noBlogData) {
      res.status(404).json({ message: 'This blog has been deleted!' });
      return;
    }

    res.status(200).json(noCategoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
