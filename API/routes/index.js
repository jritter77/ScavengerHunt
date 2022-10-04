var express = require("express");
const { ensureToken } = require("../methods");
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

router.get("/login", function (req, res, next) {
  res.render("login");
});

module.exports = router;
