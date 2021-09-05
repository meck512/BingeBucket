const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Comment } = require('../models');
const streamData = require('./streamAPI');


router.get('/', async (req, res) => {
  const data = await streamData.getStreamList('netflix', 'series');
  console.log(data[0].streamingInfo.netflix.us.link);
  console.log('======================');
  res.render('homepage', {
    loggedIn: req.session.loggedIn,
    streamData: data
  });
});


module.exports = router;