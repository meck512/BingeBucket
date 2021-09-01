const seedBucket = require('./bucket-seeds');
const seedComment = require('./comment-seeds');
const seedFeature = require('./feature-seeds');
const seedReview = require('./review-seeds');
const seedUser = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');

  await seedUser();
  await seedFeature();
  await seedBucket();
  await seedReview();
  await seedComment();

  process.exit(0);
};

seedAll();
