const sequelize = require('../config/connections');
const seedUsers = require('./userData');
const seedBlog = require('./blogData');

const seedAll = async () => {
    await sequelize.sync({ force: true });
  
    await seedUsers();
  
    await seedBlog();
  
    process.exit(0);
  };
  
  seedAll();