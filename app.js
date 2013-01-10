
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , profile = require('./routes/profile')
  , info = require('./routes/info')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('title', 'LeadHerForward');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(require('less-middleware')({ src: __dirname + '/public' }));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/profile', profile.list);

app.get('/team', info.team);
app.get('/why', info.why);
app.get('/about', info.about);
app.get('/resources', info.resources);
app.get('/faq', info.faq);
app.get('/contact_us', info.contact_us);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
