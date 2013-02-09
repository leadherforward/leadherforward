/**
 * Module dependencies.
 */

var express = require('express'),
  routes = require('./routes'),
  profile = require('./routes/profile'),
  lead = require('./routes/lead'),
  info = require('./routes/info'),
  http = require('http'),
  path = require('path'),
  bootstrap = require('bootstylus'),
  stylus = require('stylus'),
  nib = require('nib');

// compile function for stylus
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .set('compress', true)
    .set('warn', true)
    .use(nib())
    .use(bootstrap());
}

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('title', 'Lead Her Forward');
  app.use(express.favicon( __dirname + '/public/favicon.ico'));
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(stylus.middleware({
    src: __dirname + '/views',
    dest: __dirname + '/public',
    compile: compile
  }));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/timeline', routes.timeline);
app.get('/profiles', profile.list);
app.get('/profile/:id', profile.show);
app.get('/take_the_lead/:id', lead.show);

app.get('/take_lead', lead.list);
app.get('/team', info.team);
app.get('/why', info.why);
app.get('/about', info.about);
app.get('/contact_us', info.contact_us);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});





