const router = require("express").Router();
const { User, Feature, Comment, Review } = require("../../models");
// const withAuth = require("../../utils/auth");

router.get("/", (req, res) => {
  Feature.findAll({
    attributes: [
      "id",
      "title",
      "cover_photo",
      "cast",
      "description",
      "feature_url",
      "user_id",
    ],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
      {
        model: Comment,
        attributes: ["id", "comment_text", "user_id", "review_id"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: Review,
        attributes: [
          "id",
          "Review_text",
          "user_id",
          "feature_id",
          "review_rating",
        ],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
    ],
  })
    .then((dbFeatureData) => res.json(dbFeatureData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Feature.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "title",
      "cover_photo",
      "cast",
      "description",
      "feature_url",
      "user_id",
    ],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
      {
        model: Comment,
        attributes: ["id", "comment_text", "user_id", "review_id"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: Review,
        attributes: [
          "id",
          "Review_text",
          "user_id",
          "feature_id",
          "review_rating",
        ],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
    ],
  })
    .then((dbFeatureData) => res.json(dbFeatureData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
