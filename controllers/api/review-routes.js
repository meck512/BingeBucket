const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

router.get('/', (req, res) => {
    Review.findAll()
      .then(dbReviewData => res.json(dbReviewData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.post('/', withAuth, (req, res) => {
    if (req.session) {
        Review.create({
                comment_text: req.body.comment_text,
                post_id: req.body.post_id,
                user_id: req.session.user_id,
                review_rating: req.body.review_rating
            })
            .then(dbCommentData => res.json(dbCommentData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    }
});