const  User  = require('../models');

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

console.log(userdata);

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
