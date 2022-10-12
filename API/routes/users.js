let express = require("express");
let router = express.Router();
let jwt = require("jsonwebtoken");
const { ensureToken } = require("../methods");

const User = require('../models/Users');



// GET all users matching query
router.get("/", ensureToken, async function (req, res, next) {
  const found = await User.find(req.query);

  res.send(found);
});

// GET all users matching query
router.get("/current", ensureToken, async function (req, res, next) {
  const found = await User.findOne(req.body.user);

  res.send(found);
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
  const result = await User.findOneAndUpdate(req.body.user, req.body.attr);

  res.send(`<h1>${result.username} has been updated!</h1>`);
});


// Login Route
router.post("/login", async function (req, res, next) {
  const user = await User.findOne({ username: req.body.username });

  if (user.validPassword(req.body.password)) {
    const token = jwt.sign({id: user._id}, process.env.SECRET);
    res.cookie('JWT', token, {httpOnly: true});
    res.send('<h1>Cookie has been sent!</h1>');
  } else {
    res.send("<h1>Invalid credentials</h1>");
  }
});



module.exports = router;
