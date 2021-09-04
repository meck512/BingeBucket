const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const searchRoutes = require('./search-routes.js');

router.use('/search', searchRoutes);


router.use('/', homeRoutes);

router.use('/api', apiRoutes);

module.exports = router;