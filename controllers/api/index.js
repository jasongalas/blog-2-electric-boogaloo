const router = require('express').Router();

const userRoutes = require('./user-routes');
const blogRoutes = require('./blog-routes');
const commentRoutes = require('./comments-routes')

router.use('/users', userRoutes);
router.use('/blog', blogRoutes);
router.use('/blog', commentRoutes);

module.exports = router;
