'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sale extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Sale.init({
    item: DataTypes.STRING,
    price: DataTypes.INTEGER,
    img: DataTypes.STRING,
    descript: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    createdDate: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sale',
  });
  return Sale;
};