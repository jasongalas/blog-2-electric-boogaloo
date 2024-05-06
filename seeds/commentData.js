const { Comment } = require('../models');

const commentData = [
  {
    comment: 'This rox!',
    user_id: 2,
    blog_id: 1,
  }
]

const seedBlog = async () => await Comment.bulkCreate(commentData)

module.exports = seedBlog;