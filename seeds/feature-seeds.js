const { Bucket, User, Feature, Comment, Review } = require('../models');

const featuredata = [
  {
    title: 'movie1',
    cover_photo: 'photo, photo, photo',
    cast: 'three guys',
    description: 'description',
    feature_url: 'www.google.com',
    user_id: 2
  },
  {
    title: 'movie2',
    cover_photo: 'photo, photo, photo',
    cast: 'three guys',
    description: 'description',
    feature_url: 'www.google.com',
    user_id: 3
  },
  {
    title: 'movie3',
    cover_photo: 'photo, photo, photo',
    cast: 'three guys',
    description: 'description',
    feature_url: 'www.google.com',
    user_id: 4
  },
  {
    title: 'movie4',
    cover_photo: 'photo, photo, photo',
    cast: 'three guys',
    description: 'description',
    feature_url: 'www.google.com',
    user_id: 5
  },
  {
    title: 'movie5',
    cover_photo: 'photo, photo, photo',
    cast: 'three guys',
    description: 'description',
    feature_url: 'www.google.com',
    user_id: 6
  }
];

console.log('Feature Data');
console.log('********************');
console.log(featuredata);

const seedFeature = () => Feature.bulkCreate(featuredata);

module.exports = seedFeature;
