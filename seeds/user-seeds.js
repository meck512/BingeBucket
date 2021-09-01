const { Bucket, User, Feature, Comment, Review } = require('../models');

pwdHash = '$2b$10$tXLTXhV.nt2fFVS3KomLN.jhVQqhnrVZaSpnK/t/0nTjnnuy53WSq';

const userdata = [
  {
    username: 'nwestnedge0@cbc.ca',
    email: '11@11.com',
    password: pwdHash
  },
  {
    username: 'nwestnedge0@cbc.ca',
    email: '22@11.com',
    password: pwdHash
  },
  {
    username: 'nwestnedge0@cbc.ca',
    email: '33@11.com',
    password: pwdHash
  },
  {
    username: 'nwestnedge0@cbc.ca',
    email: '44@11.com',
    password: pwdHash
  },
  {
    username: 'nwestnedge0@cbc.ca',
    email: '55@11.com',
    password: pwdHash
  },
  {
    username: 'nwestnedge0@cbc.ca',
    email: '66@11.com',
    password: pwdHash
  }
];

console.log('User Data');
console.log('********************');

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
