const { Bucket, User, Feature, Comment, Review } = require('../models');

//password123
pwdHash = '$2b$10$tXLTXhV.nt2fFVS3KomLN.jhVQqhnrVZaSpnK/t/0nTjnnuy53WSq';

featureList = [1,2,3,4];

const userdata = [
  {
    username: 'nwestnedge0@cbc.ca',
    email: '11@11.com',
    password: pwdHash,
    featureBucket: JSON.stringify([1,2])
  },
  {
    username: 'nwestnedge0@cbc.ca',
    email: '22@11.com',
    password: pwdHash,
    featureBucket: JSON.stringify([2,3])
  },
  {
    username: 'nwestnedge0@cbc.ca',
    email: '33@11.com',
    password: pwdHash,
    featureBucket: JSON.stringify([4,2])
  },
  {
    username: 'nwestnedge0@cbc.ca',
    email: '44@11.com',
    password: pwdHash,
    featureBucket: JSON.stringify([1])
  },
  {
    username: 'nwestnedge0@cbc.ca',
    email: '55@11.com',
    password: pwdHash,
    featureBucket: JSON.stringify([3])
  },
  {
    username: 'nwestnedge0@cbc.ca',
    email: '66@11.com',
    password: pwdHash,
    featureBucket: JSON.stringify([1,2])
  }
];
console.log('User Data');
console.log('********************');
const seedUser = () => User.bulkCreate(userdata);
module.exports = seedUser;
