const express = require("express");
const cookieParser = require("cookie-parser");
const { TokenExpiredError } = require("jsonwebtoken");
const router = express.Router();
router.use(cookieParser());

const Event = require('../models').Event;
const UserModel = require("../models").User;
const Tips = require("../models").Tip;
const Sale = require("../models").Sale;

// GET USERS PROFILE
router.get("/practice", (req, res) => {
  Event.findAll().then((event) => {
    // console.log(event);
    res.render(`users/RUNKC/practice.ejs`,{
      event:event,
    });
  });
});

router.get("/practice2", (req, res) => {
  if (req.user.username === 'joey'){
    res.render(`users/RUNKC/practice2.ejs`,{
    });
  } else {
    res.redirect("/RUNKC/practice");
    };
});

router.get("/practiceView/:id", (req, res) => {
  Event.findByPk(req.params.id).then((event) => {
    res.render(`users/RUNKC/practiceView.ejs`,{
      event: event
    });
  });
});

router.put("/practiceView/:id", (req,res) => {
  Event.update(req.body.runners, {
    where: { id: req.params.id},
  }).then((updatedEvent) => {
      req.body.runners = req.body.runners + req.body.rating;
      console.log(updatedEvent);
      res.redirect("/RUNKC/practice");
  });
});


router.post('/practice2',(req,res) => {
  // console.log(Event);
  Event.create(req.body).then((newEvent) => {
    res.redirect("/RUNKC/practice");
  });
});

router.get("/tips", (req, res) => {
  Tips.findAll().then((tips) => {
    res.render(`users/RUNKC/tips.ejs`,{
      tips:tips,
    });
  });
});

router.get("/tips2", (req, res) => {
  if (req.user.username === 'joey'){
    res.render(`users/RUNKC/tips2.ejs`,{
    });
  } else {
    res.redirect("/RUNKC/tips");
    };
});

router.post('/tips2',(req,res) => {
  // console.log(Tip);
  Tips.create(req.body).then((newTip) => {
    res.redirect("/RUNKC/Tips");
  });
});

router.get("/yardsale", (req, res) => {
  Sale.findAll().then((sale) => {
    res.render(`users/RUNKC/yardsale.ejs`,{
      sale:sale,
    });
  });
});

router.get("/yardsale2", (req, res) => {
    res.render(`users/RUNKC/yardsale2.ejs`,{
  });
});

router.post('/yardsale2',(req,res) => {
  // console.log(Tip);
  Sale.create(req.body).then((newSale) => {
    res.redirect("/RUNKC/yardsale");
  });
});

router.get("/yardsaleView/:id", (req, res) => {
  Sale.findByPk(req.params.id).then((sale) => {
    res.render(`users/RUNKC/yardsaleView.ejs`,{
      sale: sale
    });
  });
});

router.delete("/yardsaleView/:id", (req, res) => {
  Sale.destroy({ where: { id: req.params.id } }).then(() => {
    res.redirect("/RUNKC/yardsale");
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