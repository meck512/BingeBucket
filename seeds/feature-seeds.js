const { Bucket, User, Feature, Comment, Review } = require('../models');

const featuredata = [
  {
    api_ID: 'movie/120',
    user_id: 1
  },
  {
    api_ID: 'movie/120',
    user_id: 2
  },
  {
    api_ID: 'movie/120',
    user_id: 3
  },
  {
    api_ID: 'movie/120',
    user_id: 4
  },
  {
    api_ID: 'movie/120',
    user_id: 5
  }
];

console.log('Feature Data');
console.log('********************');
// console.log(featuredata);

const seedFeature = () => Feature.bulkCreate(featuredata);

module.exports = seedFeature;
