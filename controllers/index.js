const router = require('express').Router();
const apiRoutes = require('./api/index');
const landingRoutes = require('./landingRoutes');

router.use('/', landingRoutes);
router.use('/api', apiRoutes);

module.exports = router;
