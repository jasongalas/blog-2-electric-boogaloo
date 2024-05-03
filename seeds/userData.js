const { User } = require('../models');

const userData = [
  {
    username: "Paws",
    email: "pawsemail@gmail.com",
    password: "password",
  }
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;