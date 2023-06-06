const router = require("express").Router();
const { User, Bill, Category } = require("../models");

router.get("/", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }
  res.render("login");
});

router.get("/signUp", (req, res) => {
  res.render("signUp");
});


module.exports = router;
