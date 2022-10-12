let express = require("express");
let router = express.Router();
let jwt = require("jsonwebtoken");
const { ensureToken } = require("../methods");
const User = require("../models/Users.js");

// Create New Friend Request
router.post("/", ensureToken, async function (req, res, next) {
    const sender = await User.findOne(req.body.user);
    const recipient = await User.findOne(req.body.receiver)
  
    if (recipient) {
  
      recipient.friendRequests.push({_id: sender._id, username: sender.username});
  
      const result = await User.findOneAndUpdate(
        {_id: recipient._id},
        {friendRequests: recipient.friendRequests}
      ) 
  
      res.send(result);
  
    }
    else {
      res.send(receiver + 'is not a valid user.')
    }
  });
  
  
  
  module.exports = router;