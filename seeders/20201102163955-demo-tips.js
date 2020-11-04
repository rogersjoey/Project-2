'use strict';

const { urlencoded } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Tips",
      [
        {
          tip: "Hydrate",
          img: "https://api.hub.jhu.edu/factory/sites/default/files/styles/landscape/public/drink-more-water-hub.jpg?itok=0rA6JsgA",
          info: "Make sure to hydrate for days in advance of a race, and—depending on the distance of the race—consider carrying a water bottle or hydration pack during the event.",
        },
        {
          tip: "Eat Whole Foods",
          img: "https://online.ahu.edu/wp-content/uploads/2019/03/Healthy-Food-Doesnt-Have-To-Be-Expensive.jpg",
          info: "Try to eat whole foods that look as close to how they are grown as possible. Avoid the processed food—like foods that dominate most conventional grocery chains.",
        },
        {
          tip: "You Need to Sprint More",
          img: "https://d39l2hkdp2esp1.cloudfront.net/img/photo/160859/160859_00_2x.jpg",
          info: "Five percent of an athlete’s total weekly mileage should be taken up by sprints. Someone running 30 miles a week should run hill sprints for 1.5 of those miles.",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
