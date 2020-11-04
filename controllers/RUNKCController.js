const cookieParser = require("cookie-parser");
const express = require("express");
const { TokenExpiredError } = require("jsonwebtoken");
const router = express.Router();

const Event = require('../models').Event;
const UserModel = require("../models").User;
const Tips = require("../models").Tip;
const Sale = require("../models").Sale;



// GET USERS PROFILE
router.get("/practice", (req, res) => {
  Event.findAll().then((event) => {
    console.log(event);
    res.render(`users/RUNKC/practice.ejs`,{
      event:event,
    });
  });
});

router.get("/tips", (req, res) => {
  Tips.findAll().then((tips) => {
    res.render(`users/RUNKC/tips.ejs`,{
      tips:tips,
    });
  });
});

router.get("/yardsale", (req, res) => {
  Sale.findAll().then((sale) => {
    res.render(`users/RUNKC/yardsale.ejs`,{
      sale:sale,
    });
  });
});

router.get("/profile", (req, res) => {
    const {cookies} = req;
    if (cookies.jwt != '') {
        UserModel.findByPk(req.params.id).then((userProfile) => {
            res.render("users/RUNKC/profile.ejs", {
            user: userProfile,
            });
        });
    } else {res.render('/')};   
});

module.exports = router;