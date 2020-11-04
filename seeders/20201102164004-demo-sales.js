'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Sales",
      [
        {
          item: "Mens Nike Vaporfly Next% Size:10",
          price: 300,
          img: "https://static.nike.com/a/images/t_default/ed2ed9af-5c1d-4802-8506-07b0d16193a3/zoomx-vaporfly-next-running-shoe-Sf9zRb.jpg",
          descript: "The Nike ZoomX Vaporfly NEXT% clears your path to record-breaking speed with a lighter design and faster feel than before. With more cushioning underfoot and reduced weight up top, the result is unprecedented energy return and comfort.",
        },
        {
          item: "Womens Hoka One One Rincon Size:9",
          price: 100,
          img: "https://www.rei.com/media/4d740c04-61c3-49bc-af2d-7dedd20765a3?size=784x588",
          descript: "Inspired by the smooth waves of the world-famous Rincon surf spot, the women's HOKA ONE ONE Rincon 2 running shoes pack amazing cushioning into extremely lightweight shoes for a soft, effortless feel.",
        },
        {
          item: "Mens New Balance Impact Singlet Size:Large",
          price: 50,
          img: "https://www.fit2run.com/media/catalog/product/cache/f9298953e225fe5aa69348b5b4218d7e/0/5/05_Impact_Singlet_mt01232mb2_40_1_jpg.jpg",
          descript: "The men's New Balance Impact running Singlet features cutting-edge NB DRYx and NB ICEx technologies, and wicks away moisture, helping you stay cool and dry as you push through the last miles of your marathon run.",
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
