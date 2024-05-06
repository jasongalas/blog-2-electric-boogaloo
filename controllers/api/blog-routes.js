const router = require('express').Router();
const { Blog } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newBlogData = await Blog.create(req.body);
    res.status(200).json(newBlogData);
  }catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try{
    const updateBlogData = await Blog.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(updateBlogData);
  }catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const noBlogData = await Blog.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!noBlogData) {
      res.status(404).json({ message: 'This blog has been deleted!' });
      return;
    }

    res.status(200).json(noCategoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
