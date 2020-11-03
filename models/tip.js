"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tip extends Model {
    static associate(models) {
      Tip.belongsTo(models.User, { foreignKey: "userId" });
      Tip.belongsToMany(models.User, {
        through: "userID",
        foreignKey: "fruitId",
        otherKey: "seasonId",
      });
    }
  }
  Tip.init(
    {
      tip: DataTypes.STRING,
      createdDate: DataTypes.STRING,
      img: DataTypes.STRING,
      info: DataTypes.STRING,
      likes: DataTypes.INTEGER,
      comments: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Tip",
    }
  );
  return Tip;
};