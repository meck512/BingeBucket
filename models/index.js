const Review = require('./Review');
const User = require('./User');
const Feature = require('./Feature');
const Comment = require('./Comment');

Feature.hasMany(Review, {
  foreignKey: 'review_id'
});
Review.hasMany(Comment, {
  foreignKey: 'comment_id',
});
Comment.belongsTo(Review, {
  foreignKey: 'review_id',
});
User.hasMany(Feature, {
  foreignKey: 'user_id'
});
Feature.belongsTo(User, {
  foreignKey: 'user_id'
});


module.exports = { User, Review,  Feature, Comment };

