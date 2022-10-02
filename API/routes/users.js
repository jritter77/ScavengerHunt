let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

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

router.post("/", async function (req, res, next) {
  const user = new User(req.body);

  await user.save();

  res.send(`<h1>${user.username} was added to database!</h1>`);
});

router.delete("/", async function (req, res, next) {
  const result = await User.findOneAndDelete(req.body);

  res.send(`<h1>${result.username} has been deleted from the database!`);
});

router.put("/", async function (req, res, next) {
  const result = await User.findOneAndUpdate(req.body.user, req.body.attr);

  res.send(`<h1>${result.username} has been updated!`);
});

initDb();

module.exports = router;
