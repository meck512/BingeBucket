const router = require('express').Router();

const userRoutes = require('./user-routes');
const reviewRoutes = require('./review-routes');
const featureRoutes = require('./feature-routes');

router.use('/users', userRoutes);
router.use('/posts', reviewRoutes);
router.use('/comments', featureRoutes);

module.exports = router;