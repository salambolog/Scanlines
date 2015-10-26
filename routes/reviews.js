var express = require('express');
var passport = require('passport');
var Router = express.Router();


//  / = /reviews,  /:id = /reviews/:id

/* GET SIGNUP page. */
Router.get('/', function(req, res, next) {
  res.render('reviews', { title: 'Express' });
});

module.exports = Router;
