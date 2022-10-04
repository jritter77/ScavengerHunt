let express = require("express");
const { JsonWebTokenError } = require("jsonwebtoken");
let router = express.Router();
let mongoose = require("mongoose");
let jwt = require("jsonwebtoken");
const { ensureToken } = require("../methods");

let User;

async function initDb() {
  await mongoose.connect("mongodb://localhost:27017/LookoutDB");

  const UserSchema = mongoose.Schema({
    username: String,
    password: String,
    isAdmin: Boolean,
    apiKey: String,

    activityLog: Object,

    huntHistory: Object,
    friends: Array,
    friendRequests: Array,
    groupInvites: Array,
    sharedHunts: Array,
  });

  User = mongoose.models.User || mongoose.model("User", UserSchema);
}

/* GET user/s */
router.get("/", async function (req, res, next) {
  const found = await User.find(req.query);

  res.send(found);
});

router.post("/login", async function (req, res, next) {
  const user = await User.findOne({ username: req.body.username });

  if (user.password === req.body.password) {
    console.log("success!");
    const token = jwt.sign(user.username, process.env.SECRET);
    res.send(token);
  } else {
    console.log("Invalid credentials");
  }
});

router.post("/", async function (req, res, next) {
  const user = new User(req.body);

  await user.save();

  res.send(`<h1>${user.username} was added to database!</h1>`);
});

router.delete("/", async function (req, res, next) {
  const result = await User.findOneAndDelete(req.body);

  res.send(`<h1>${result.username} has been deleted from the database!</h1>`);
});

router.put("/", ensureToken, async function (req, res, next) {
  const result = await User.findOneAndUpdate(req.body.user, req.body.attr);

  res.send(`<h1>${result.username} has been updated!</h1>`);
});

initDb();

module.exports = router;
