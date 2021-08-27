// ADD 1-5 star rating****

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}

Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Review_text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    feature_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'feature',
        key: 'id'
      }
    },
    review_rating: {
      type: DataTypes.INTEGER, 
      validate: {
        len: [1,5]
      }
  },
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Review'
  }
);

module.exports = Review;
