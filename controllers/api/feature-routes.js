const router = require("express").Router();
const { User, Feature, Comment, Review } = require("../../models");
// const withAuth = require("../../utils/auth");

router.get("/", (req, res) => {
  Feature.findAll({


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
    }

  })
    .then((dbFeatureData) => res.json(dbFeatureData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
