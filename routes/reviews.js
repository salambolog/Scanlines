var express = require('express');
var router = express.Router();

/* GET SIGNUP page. */
router.get('/reviews', function(req, res, next) {
  res.render('reviews', { title: 'Express' });
});

module.exports = router;
