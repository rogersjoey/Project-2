"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      Comment.belongsTo(models.User, { foreignKey: "userId" });
      Comment.belongsTo(models.Tip, {
        through: "userId",
      });
    }
  }
Comment.init(
    {
        text: DataTypes.STRING,
        createdDate: DataTypes.STRING,
        userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );
  return Comment;
};