const Review = require('./Review');
const User = require('./User');
const Feature = require('./Feature');
const Comment = require('./Comment');

<<<<<<< HEAD
=======


>>>>>>> c18c44fdd10e6d55f114f8f1d32a97bd956e4f7c
Feature.hasMany(Review, {
  foreignKey: 'review_id'
});
Review.hasMany(Comment, {
  foreignKey: 'comment_id',
});
Comment.belongsTo(Review, {
  foreignKey: 'review_id',
});

<<<<<<< HEAD
module.exports = { User, Review,  Feature, Comment };
=======

module.exports = { User, Review,  Feature, Comment };

>>>>>>> c18c44fdd10e6d55f114f8f1d32a97bd956e4f7c
