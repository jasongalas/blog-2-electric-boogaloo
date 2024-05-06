const { User } = require('../models');

const userData = [
  {
    username: 'Paws',
    password: 'password',
  },
  {
    username: 'Tigrr',
    password: 'handler1'
  }
]

const seedUser = async () => await User.bulkCreate(userData)

module.exports = seedUser;