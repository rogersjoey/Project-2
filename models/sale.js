"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sale extends Model {
    static associate(models) {
      Sale.belongsTo(models.User, { foreignKey: "userId" });
      Sale.belongsToMany(models.User, {
        through: "userID",
        foreignKey: "fruitId",
        otherKey: "seasonId",
      });
    }
  }
  Sale.init(
    {
      item: DataTypes.STRING,
      price: DataTypes. INTEGER,
      createdDate: DataTypes.STRING,
      img: DataTypes.STRING,
      descript: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Sale",
    }
  );
  return Sale;
};