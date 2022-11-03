let express = require("express");
let router = express.Router();
let jwt = require("jsonwebtoken");
const { ensureToken } = require("../methods");
const User = require("../models/Users.js");

router.get("/", ensureToken, async function (req, res, next) {
  const result = await User.findOne(req.body.user, {
    friends: 1,
    friendRequests: 1,
    _id: 0,
  });

  res.send(result);
});

// Create New Friend Request
router.post("/", ensureToken, async function (req, res, next) {
  const sender = await User.findOne(req.body.user);
  const recipient = await User.findOne(req.body.receiver);

  if (recipient) {
    recipient.friendRequests.push({
      _id: sender._id,
      username: sender.username,
    });

    const result = await User.findOneAndUpdate(
      { _id: recipient._id },
      { friendRequests: recipient.friendRequests }
    );

    res.send("SUCCESS");
  } else {
    res.send(receiver + "is not a valid user.");
  }
});

router.put("/accept", ensureToken, async function (req, res, next) {
  const user = User.findOne(req.body.user);
  user.acceptFriendRequest(req.request);
  user.save();

  res.send(req.request.username + "has been added as a friend!");
});

module.exports = router;
