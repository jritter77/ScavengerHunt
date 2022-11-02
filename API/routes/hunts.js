let express = require("express");
let router = express.Router();
const { ensureToken } = require("../methods");
const Hunt = require("../models/Hunts");


/* GET hunt/s */
router.get("/", ensureToken, async function (req, res, next) {
  const found = await Hunt.find(req.query, {author:1, title:1, description:1, ratings:1, downloads:1});

  res.send(found);
});

router.get("/download", ensureToken, async function (req, res, next) {
  const found = await Hunt.findOne({_id: req.query.huntId});

  console.log(found);

  res.send(found);
});

router.post("/", ensureToken, async function (req, res, next) {
  const hunt = new Hunt(req.body.hunt);

  await hunt.save();

  res.send(`<h1>${hunt.title} was added to database!</h1>`);
});

router.delete("/", ensureToken, async function (req, res, next) {
  const result = await Hunt.findOneAndDelete(req.body.hunt);

  res.send(`<h1>${result.title} has been deleted from the database!</h1>`);
});

router.put("/", ensureToken, async function (req, res, next) {
  const result = await Hunt.findOneAndUpdate(req.body.hunt, req.body.attr);

  res.send(`<h1>${result.title} has been updated!</h1>`);
});


module.exports = router;
