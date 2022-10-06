let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
const { ensureToken } = require("../methods");

let Hunt;

async function initDb() {
  await mongoose.connect("mongodb://localhost:27017/LookoutDB");

  const HuntSchema = mongoose.Schema({
    author: String,
    title: String,
    description: String,

    clueList: Array,

    rating: Array,
    downloads: Number,
  });

  Hunt = mongoose.models.Hunt || mongoose.model("Hunt", HuntSchema);
}

/* GET hunt/s */
router.get("/", async function (req, res, next) {
  const found = await Hunt.find(req.query);

  res.send(found);
});

router.post("/", async function (req, res, next) {
  const hunt = new Hunt(req.body);

  console.log(req.body);

  await hunt.save();

  res.send(`<h1>${hunt.title} was added to database!</h1>`);
});

router.delete("/", ensureToken, async function (req, res, next) {
  const result = await Hunt.findOneAndDelete(req.body);

  res.send(`<h1>${result.title} has been deleted from the database!</h1>`);
});

router.put("/", ensureToken, async function (req, res, next) {
  const result = await Hunt.findOneAndUpdate(req.body.user, req.body.attr);

  res.send(`<h1>${result.title} has been updated!</h1>`);
});

initDb();

module.exports = router;
