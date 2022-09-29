let express = require('express');
let router = express.Router();
let mongoose = require('mongoose')


router.get('/', async function(req, res, next) {

  await mongoose.connect('mongodb://localhost:27017/myData')
  const KittySchema = mongoose.Schema({name: String});
  const Kitten = mongoose.models.Kitten || mongoose.model('Kitten', KittySchema)

  const found = await Kitten.find(req.query);

  res.send(found)
})


router.get('/insert', async function(req, res, next) {

  await mongoose.connect('mongodb://localhost:27017/myData')

  const KittySchema = mongoose.Schema({name: String});
  const Kitten = mongoose.models.Kitten || mongoose.model('Kitten', KittySchema)
  const kitty = new Kitten(req.query);

  await kitty.save();

  mongoose.connection.close();

  res.send(`<h1>${kitty.name} was added to database!</h1>`);
});

router.get('/delete', async function(req, res, next) {

  await mongoose.connect('mongodb://localhost:27017/myData')
  const KittySchema = mongoose.Schema({name: String});
  const Kitten = mongoose.models.Kitten || mongoose.model('Kitten', KittySchema)

  console.log(req.query)

  const found = await Kitten.deleteMany(req.query);

  res.send(found)
})

module.exports = router;
