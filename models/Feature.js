const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Feature extends Model { }
// Once we decide what info we want from the api we will have to add things like movie poster, actors, imbd rating etc.

Feature.init(

  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    api_ID: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'feature'
  }
);

module.exports = Feature;
