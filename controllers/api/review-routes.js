const router = require('express').Router();
const { User, Feature, Comment, Review } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Review.findAll({
      attributes: [
        'id',
        'Review_text',
        'user_id',
        'feature_id',
        'review_rating'
      ],
      include: [
        {
          model: User,
          attributes: ['username']
        },
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'user_id', 'review_id'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: Feature,
          attributes: ['id', 'title', 'cover_photo', 'feature_url']
        }
      ]
    })
      .then(dbReviewData => res.json(dbReviewData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/:id', (req, res) => {
    Review.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'Review_text',
        'user_id',
        'feature_id',
        'review_rating'
        
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'user_id', 'review_id'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        },
        {
          model: Feature,
          attributes: ['id', 'title', 'cover_photo', 'feature_url']
        }
      ]
    })
      .then(dbReviewData => {
        if (!dbReviewData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbReviewData);
      })
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
            .then(dbReviewData => res.json(dbReviewData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    }
});

router.put('/:id', withAuth, (req, res) => {
  Review.update(
    {
      title: req.body.title
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbReviewData => {
      if (!dbReviewData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbReviewData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  console.log('id', req.params.id);
  Review.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbReviewData => {
      if (!dbReviewData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbReviewData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;