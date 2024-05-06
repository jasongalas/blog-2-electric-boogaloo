const router = require('express').Router();
const authorize = require('../utils/auth');
const { Blog, User } = require('../models')

router.get('/', authorize, async (req, res) => {
  try {

    if(!req.session.loggedIn){
      res.render('login')
      return;
  }
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

router.get('/login', (req, res) => {
  
  if (req.session.logged_in) {
    res.redirect('homepage/');
    return;
  }

  res.render('login');
});

module.exports = router;
