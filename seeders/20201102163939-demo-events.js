"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Event",
      [
        {
          name: "Halloweend Dash",
          date: 'October 31 2020 19:30',
          location: 'Nelson Atkins South Lawn',
          workout: "5k/10k Race",
        },
        {
          name: "1k Repeats",
          date: 'November 2 2020 19:00',
          location: 'Loose Park Tennis Courts',
          workout: "6 x 1k repeats at race pace",
        },
        {
          name: "Tempo Run",
          date: 'November 3 2020 19:00',
          location: 'Trolley Tracks Trail',
          workout: "6 mile tempo run",
        },
        {
          name: "Hill Repeats",
          date: 'November 4 2020 19:00',
          location: 'North Line Creek Parkway',
          workout: "10 hill repeats",
        },
        {
          name: "Steady Day",
          date: 'November 5 2020 19:00',
          location: 'River Market',
          workout: "4 mile run along the Missouri River",
        },
        {
          name: "Fartlek Friday",
          date: 'November 6 2020 19:00',
          location: 'Brush Creek Parkway',
          workout: "5-7 mile Fartek",
        },
        {
          name: "Sunday Long Run",
          date: 'November 8 2020 19:00',
          location: 'Stump Park',
          workout: "12 mile run down Mill Creek trail",
        },
        {
          name: "Cheifs Turkey Trot",
          date: 'November 26 2020 7:30',
          location: 'Arrowhead Parking Lot',
          workout: "5k Race",
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
  },
};