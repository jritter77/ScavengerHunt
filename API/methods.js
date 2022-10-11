let jwt = require("jsonwebtoken");

module.exports.ensureToken = function (req, res, next) {
  const cookies = req.cookies;

  if (cookies.JWT) {
  
    jwt.verify(cookies.JWT, process.env.SECRET, (err, result) => {

      if (err) {
        res.redirect(403, '/login');
      } else {
        req.body.user = {_id: result.id};
        next();
      }
    });
  } else {
    res.redirect(403, '/login');
  }
};
