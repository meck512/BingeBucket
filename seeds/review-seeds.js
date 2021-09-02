const { Bucket, User, Feature, Comment, Review } = require('../models');

const reviewdata = [
  {
    Review_text: 'review1',
    user_id: 1
  },
  {
    Review_text: 'review2',
    user_id: 2
  },
  {
    Review_text: 'review3',
    user_id: 3
  },
  {
    Review_text: 'review4',
    user_id: 4
  },
  {
    Review_text: 'review5',
    user_id: 5
  },
];

console.log('Review Data');
console.log('********************');
// console.log(reviewdata);

const seedReview = () => Review.bulkCreate(reviewdata);

module.exports = seedReview;
