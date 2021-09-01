const { Bucket, User, Feature, Comment, Review } = require('../models');

const commentdata = [
  {
    comment_text: 'movie1',
    user_id: 1,
    review_id: 1
  },
  {
    comment_text: 'movie2',
    user_id: 2,
    review_id: 2
  },
  {
    comment_text: 'movie3',
    user_id: 3,
    review_id: 3
  },
  {
    comment_text: 'movie4',
    user_id: 4,
    review_id: 4
  },
  {
    comment_text: 'movie5',
    user_id: 5,
    review_id: 5
  }
];

console.log('Comment Data');
console.log('********************');
console.log(commentdata);

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;
