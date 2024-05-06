const { Blog } = require('../models');

const blogData = [
  {
    postTitle: 'Much ado about nothing',
    content: 'Time keeps on slipping and yet it lingers at the same time.',
    username: 'Paws',
    createddate: '4/20/24',
    comment: '',
    user_id: 1
  }
]

const seedBlog = async () => await Blog.bulkCreate(blogData)

module.exports = seedBlog;