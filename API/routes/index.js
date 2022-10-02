var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Lookout! API" });
});

router.get("/newUser", function (req, res, next) {
  res.render("newUser");
});

router.get("/deleteUser", function (req, res, next) {
  res.render("deleteUser");
});

router.get("/editUser", function (req, res, next) {
  res.render("editUser");
});

module.exports = router;
