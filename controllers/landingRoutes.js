const router = require('express').Router();
const authorize = require('../utils/auth');
const { Blog, User } = require('../models')

router.get('/', async (req, res) => {
  try {

  const blogData = await Blog.findAll({
      include: [
          {
              model: User,
              attributes: ['username'],
          },
      ],
      order: [['createddate', 'DESC']],  // Orders the posts by creation time in descending order
  });

    const blogs = blogData.map(blog => blog.get({ plain: true }));
    res.render('homepage', {
      blogs, 
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/blog/:id', async (req, res) => {
  try {
    const blogId = req.params.id;
    const blog = await Blog.findByPk(blogId, {
      include: [User]
    });

    if (!blog) {
      return res.status(404).send('Blog not found');
    }

    const blogData = blog.get({ plain: true });
    res.render('blog', { blog: blogData, loggedIn: req.session.loggedIn });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

module.exports = router;
