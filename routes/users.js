var express = require('express');
var Router = express.Router();

/* GET users listing. */
Router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = Router;
