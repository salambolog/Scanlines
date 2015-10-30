var express      = require('express');
var path         = require('path');
var favicon      = require('serve-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var app          = express();
// var http         = require("http").createServer(app);
var Router       = express.Router();


var routes       = require('./routes/index');
var users        = require('./routes/users');
var reviews      = require('./routes/reviews');
app.engine('html', require('ejs').renderFile);

// view engine setup
// app.set('ippadr', '96.89.86.225');
app.set('port',process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));

// app.use(expressLayouts);

// //Tells server to support JSON requests
// app.use(bodyParser.json());

//Handle route "GET /", as in "http://localhost:8080/"
// app.get("/", function(request, response) {

//   //Show a simple response message
//   response.send("Server is up and running");

// });

//Start the http server at port and IP defined before
// http.listen(app.get("port"), app.get("ipaddr"), function() {
//   console.log("Server up and running. Go to http://" + app.get("ipaddr") + ":" + app.get("port"));
// });

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// routes.extendExpress4(app);


app.use('/users', users);
app.use('/reviews', reviews);
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
