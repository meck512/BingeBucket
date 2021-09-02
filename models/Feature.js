const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Feature extends Model {}
// Once we decide what info we want from the api we will have to add things like movie poster, actors, imbd rating etc.

Feature.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      api_Id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      // title: {
      //   type: DataTypes.STRING,
      //   allowNull: false
      // },
      // cover_photo: {
      //   type: DataTypes.STRING, 
      // },
      // cast: {
      //   type: DataTypes.STRING, 
      // },
      // description: {
      //   type: DataTypes.STRING,
      // },
      // feature_url: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      //   validate: {
      //     isURL: true
      //   }
      // },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
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
  