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

// API API API API API API
// API API API API API API
// API API API API API API
// API API API API API API
function tplawesome(e,t){res=e;for(var n=0;n<t.length;n++){res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){return t[n][r]})}return res}

$(function() {
    $("form").on("submit", function(e) {
       e.preventDefault();
       // prepare the request
       var request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
            maxResults: 3,
            order: "viewCount",
            publishedAfter: "2015-01-01T00:00:00Z"
       });
       // execute the request
       request.execute(function(response) {
          var results = response.result;
          $("#results").html("");
          $.each(results.items, function(index, item) {
            $.get("tpl/item.html", function(data) {
                $("#results").append(tplawesome(data, [{"title":item.snippet.title, "videoid":item.id.videoId}]));
            });
          });
          resetVideoHeight();
       });
    });

    $(window).on("resize", resetVideoHeight);
});

function resetVideoHeight() {
    $(".video").css("height", $("#results").width() * 9/16);
}

function init() {
    gapi.client.setApiKey("AIzaSyDeBn89z05DVOhsGwTTV9NIQQAmwL7gd90");
    gapi.client.load("youtube", "v3", function() {
        // yt api is ready
    });
}


// OVER OVER OVER OVER OVER OVER

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
