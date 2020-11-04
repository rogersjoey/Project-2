'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Tip.init({
    tip: DataTypes.STRING,
    img: DataTypes.STRING,
    info: DataTypes.STRING,
    like: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tip',
  });
  return Tip;
};