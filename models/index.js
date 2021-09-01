const Review = require('./Review');
const User = require('./User');
const Bucket = require('./Bucket');
const Feature = require('./Feature');
const Comment = require('./Comment');

User.hasMany(Review, {
    foreignKey: 'user_id'
  });

  Review.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });

  Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });

  User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });

  User.hasMany(Review, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });

  Review.hasMany(Comment, {
    foreignKey: 'review_id'
  });

  Bucket.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });
 
   

  Bucket.hasMany(Feature, {
    foreignKey: 'user_id'
  });

 

module.exports = { User, Review, Bucket, Feature, Comment };