const seedBucket = require('./bucket-seeds');
const seedUser = require('./user-seeds');
const seedFeature = require('./feature-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');

  await seedUser();
  await seedFeature();
  await seedBucket();

  process.exit(0);
};

seedAll();
