const { Blog } = require('../models');

const blogData = [
  {
    postTitle: "Much ado about nothing",
    content: "Time keeps on slipping and yet it lingers at the same time.",
    username: "Paws",
    comment: "",
  }
]

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;