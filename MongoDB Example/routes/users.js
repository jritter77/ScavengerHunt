let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/1', function(req, res, next) {
  res.send('this is 1');
});
module.exports = router;
