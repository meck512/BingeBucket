const Review = require('./Review');
const User = require('./User');
const Bucket = require('./Bucket');
const Feature = require('./Feature');
const Comment = require('./Comment');


Bucket.belongsTo(User, {
  foreignKey: 'user_id'
});

Feature.belongsTo(Bucket, {
  foreignKey: 'user_id'
});

Bucket.hasMany(Feature, {
  foreignKey: 'feature_id'
});

Feature.hasMany(Review, {
  foreignKey: 'review_id'
});

Review.hasMany(Comment, {
  foreignKey: 'comment_id',
});


module.exports = { User, Review, Bucket, Feature, Comment };