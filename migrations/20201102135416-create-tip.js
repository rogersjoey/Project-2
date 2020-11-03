"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Tip", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      tip: {
        type: Sequelize.STRING,
      },
      createdDate: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      img: {
        type: Sequelize.STRING,
      },
      info:{
        type: Sequelize.STRING,
      },
      like:{
        type: Sequelize.INTEGER,
      },
      comment:{
        type: Sequelize.STRING,      
      },
      userId:{
        type: Sequelize.INTEGER,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
