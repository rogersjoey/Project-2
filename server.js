require('dotenv').config()
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

app.use(cookieParser());

const Event = require('./models').Event;
const UserModel = require('./models').User;
const Tips = require('./models').Tip;
const Sale = require('./models').Sale;


// make change

const verifyToken = (req, res, next) => {
  let token = req.cookies.jwt;
  // COOKIE PARSER GIVES YOU A .cookies PROP, WE NAMED OUR TOKEN jwt
  console.log("Cookies: ", req.cookies.jwt);

  jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => {
    if (err || !decodedUser) {
      return res.status(401).json({ error: "Unauthorized Request" });
    }
    req.user = decodedUser;
    // ADDS A .user PROP TO REQ FOR TOKEN USER
    console.log(decodedUser);

    next();
  });
};

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(__dirname + "/public"));

// HOMEPAGE
app.get("/", (req, res) => {
  Tips.findAll().then((tip) =>{
    Event.findAll().then((event) =>{
      Sale.findAll().then((sale) =>{
        res.render("users/RUNKC/home.ejs",{
          tip: tip[tip.length-1],
          event: event[2],
          sale: sale[sale.length-1]
        });
      });
    });
  });
});

app.use("/auth", require("./controllers/authController.js"));
app.use("/RUNKC", verifyToken, require("./controllers/RUNKCController.js"));

app.listen(process.env.PORT, () => {
  console.log("Nodemon listening");
});
