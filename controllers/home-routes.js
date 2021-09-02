const router = require('express').Router();
const sequelize = require('../config/connection');
const {User, Comment } = require('../models');

router.get('/', (req, res) => {
  console.log('======================');
  res.render('homepage', {
    loggedIn: req.session.loggedIn
  });
});
module.exports = router;