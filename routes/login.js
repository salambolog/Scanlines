var express = require('express');
var passport = require('passport');
var Router = express.Router();

/* GET SIGNUP page. */
Router.get('/', function(req, res, next) {
  res.render('signup');
});

module.exports = Router;
