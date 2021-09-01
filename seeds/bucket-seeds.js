const  { Bucket, User, Feature } = require('../models');

const bucketdata = [
  {
    user_id: 1,
    feature_id: 2
  },
  {
    user_id: 2,
    feature_id: 3
  },
  {
    user_id: 3,
    feature_id: 4
  },
  {
    user_id: 4,
    feature_id: 3
  },
  {
    user_id: 5,
    feature_id: 5
  },
  {
    user_id: 1,
    feature_id: 1
  },
  {
    user_id: 4,
    feature_id: 1
  }
];

console.log(bucketdata);

const seedBucket = () => Bucket.bulkCreate(bucketdata);

module.exports = seedBucket;
