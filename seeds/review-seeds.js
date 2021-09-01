const { Bucket, User, Feature, Comment, Review } = require('../models');

const reviewdata = [
  {
    Review_text: 'review1',
    user_id: 1,
    feature_id: 1,
    review_rating: 1
  },
  {
    Review_text: 'review2',
    user_id: 2,
    feature_id: 2,
    review_rating: 2
  },
  {
    Review_text: 'review3',
    user_id: 3,
    feature_id: 3,
    review_rating: 3
  },
  {
    Review_text: 'review4',
    user_id: 4,
    feature_id: 4,
    review_rating: 4
  },
  {
    Review_text: 'review5',
    user_id: 4,
    feature_id: 4,
    review_rating: 4
  },
];

console.log('Review Data');
console.log('********************');
// console.log(reviewdata);

const seedReview = () => Review.bulkCreate(reviewdata);

module.exports = seedReview;
