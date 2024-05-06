const router = require('express').Router();
const authorize = require('../utils/auth');

router.get('/', authorize, async (req, res) => {
  try {
    res.render('homepage', {
      
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
