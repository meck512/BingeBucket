const router = require('express').Router();

const userRoutes = require('./user-routes');
const reviewRoutes = require('./review-routes');
const featureRoutes = require('./feature-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/posts', reviewRoutes);
router.use('/features', featureRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
