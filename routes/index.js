var express = require('express');
var Router = express.Router();
var signup = require('./signup');

/* GET home page. */
Router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET /signup
Router.get('/signup', function(req, res, next) {
  res.render('signup', { message: req.flash() });
});

//     function signupAuthenticate(req, res, next) {
//       var signUpStrategy = passport.authenticate('local-signup', {
//         failureRedirect : '/signup',
//         failureFlash : true
//       });
//       return signUpStrategy(req, res, next);
//     }

// POST /signup
//     Router.post('/signup', signupAuthenticate, function(req, res, next) {
//       if (req.user) {
//         res.redirect('farmers/' + req.user._id + '/edit/');
//       }
//     });

module.exports = Router;
