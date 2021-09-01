const { Bucket, User, Feature, Comment, Review } = require('../models');

const userdata = [
  {
    username: 'nwestnedge0@cbc.ca',
    email: '11@11.com',
    password: 'password123'
  },
  {
    username: 'nwestnedge0@cbc.ca',
    email: '22@11.com',
    password: 'password123'
  },
  {
    username: 'nwestnedge0@cbc.ca',
    email: '33@11.com',
    password: 'password123'
  },
  {
    username: 'nwestnedge0@cbc.ca',
    email: '44@11.com',
    password: 'password123'
  },
  {
    username: 'nwestnedge0@cbc.ca',
    email: '55@11.com',
    password: 'password123'
  },
  {
    username: 'nwestnedge0@cbc.ca',
    email: '66@11.com',
    password: 'password123'
  }
];

console.log('User Data');
console.log('********************');
console.log(userdata);

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
