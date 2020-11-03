const cookieParser = require("cookie-parser");
const express = require("express");
const { TokenExpiredError } = require("jsonwebtoken");
// const { noExtendLeft } = require("sequelize/types/lib/operators");
const router = express.Router();

const UserModel = require("../models").User;

// GET USERS PROFILE
router.get("/practice", (req, res) => {
    res.render(`users/RUNKC/practice.ejs`);
  });

router.get("/tips", (req, res) => {
  res.render(`users/RUNKC/tips.ejs`);
});

router.get("/yardsale", (req, res) => {
  res.render(`users/RUNKC/yardsale.ejs`);
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