let express = require("express");
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

    activityLog: Object,

    huntHistory: Object,
    friends: Array,
    friendRequests: Array,
    groupInvites: Array,
    sharedHunts: Array,
  });

  User = mongoose.models.User || mongoose.model("User", UserSchema);
}

// GET all users matching query
router.get("/", ensureToken, async function (req, res, next) {
  const found = await User.find(req.query);

  res.send(found);
});

// Create New User 
router.post("/", async function (req, res, next) {
  const user = new User(req.body);

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

  if (user && user.password === req.body.password) {
    const token = jwt.sign({id: user._id}, process.env.SECRET);
    res.cookie('JWT', token, {httpOnly: true});
    res.send('<h1>Cookie has been sent!</h1>');
  } else {
    res.send("<h1>Invalid credentials</h1>");
  }
});




// Create New Friend Request
router.post("/friends", ensureToken, async function (req, res, next) {
  const sender = await mongoose.findOne({username: req.body.user});
  const recipient = await mongoose.findOne({username: req.body.receiver})

  if (recipient) {

    recipient.friendRequests.push({_id: sender._id, username: sender.username});

    const result = await mongoose.findOneAndUpdate(
      {_id: recipient._id},
      {friendRequests: recipient.friendRequests}
    ) 

    res.send(result);

  }
  else {
    res.send(receiver + 'is not a valid user.')
  }
});


initDb();

module.exports = router;
