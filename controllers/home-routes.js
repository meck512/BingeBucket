const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Comment } = require('../models');
const streamData = require('./streamAPI');

router.get('/', async (req, res) => {
  const data = await streamData.getStreamList('netflix');
  console.log(data[0]);
  console.log('======================');
  res.render('homepage', {
    loggedIn: req.session.loggedIn,
    streamData: data
  });
});

module.exports = router;