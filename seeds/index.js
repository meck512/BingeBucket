const seedBucket = require('./bucket-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedBucket();

  process.exit(0);
};

seedAll();
