"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate(models) {
      Event.belongsTo(models.User, { foreignKey: "userId" });
      Event.belongsToMany(models.User, {
        through: "userID",
        foreignKey: "fruitId",
        otherKey: "seasonId",
      });
    }
  }
  Event.init(
    {
      name: DataTypes.STRING,
      date: DataTypes.STRING,
      location: DataTypes.STRING,
      workout: DataTypes.STRING,
      runners: DataTypes.INTEGER,
      rating: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Event',
    }
  );
  return Event;
};