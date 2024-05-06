const router = require('express').Router();
const { Comments } = require('../../models');

router.post('/write', async (req, res) => {
    if (!req.session.loggedIn) {
        res.status(403).json({ message: "User not logged in" });
        return;
    }

  try {
    const newComment = await Comments.create({
      commentContent: req.body.content,
      userId: req.session.userId,
      postId: req.body.postId,
    });
    res.status(201).json(newComment);
  }catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
