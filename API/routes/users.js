let express = require("express");
let cors = require("cors");
let router = express.Router();
let jwt = require("jsonwebtoken");
const { ensureToken } = require("../methods");
const User = require('../models/Users');



// GET user according to query
router.get("/", ensureToken, async function (req, res, next) {
  const users = await User.find(req.query, {username:1});

  res.send(users);
});


// Create New User 
router.post("/", async function (req, res, next) {
  const user = new User(req.body);

  user.setPassword(req.body.password);

  await user.save();

  res.send(`<h1>${user.username} was added to database!</h1>`);
});

// Delete Current User
router.delete("/", ensureToken, async function (req, res, next) {
  const result = await User.findOneAndDelete(req.body.user);

  res.clearCookie('JWT');

  res.send(`<h1>${result.username} has been deleted from the database!</h1>`);
});

// Edit Current User
router.put("/", ensureToken, async function (req, res, next) {
  const user = await User.findOne(req.body.user);
  user.changeCredentials(req.body.attr);
  await user.save();
  
  res.send(`<h1>${user.username} has been updated!</h1>`);
});


// Login Route
router.post("/login", async function (req, res, next) {
  const user = await User.findOne({ username: req.body.username });

  if (user.validPassword(req.body.password)) {
    const token = jwt.sign({id: user._id}, process.env.SECRET);
    res.cookie('JWT', token, {httpOnly: true});
    res.send({id: user._id, username: user.username, token: token});
  } else {
    res.send(false);
  }
});



module.exports = router;
