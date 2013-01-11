
/**
 * Module dependencies.
 */

var express = require('express'),
  routes = require('./routes'),
  profile = require('./routes/profile'),
  info = require('./routes/info'),
  http = require('http'),
  path = require('path');

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

//Some code for the MongoDB <- MongoJS -> Express side of things
//Still need to come up with a way to funnel different parts of MongoDB entries into parts of a profile
//Some mongoJS stuff that connects to 
var databaseUrl = "LHFdb";
var collections = ["profiles"]
var db = require("mongojs").connect(databaseUrl, collections);

//This saves one example profile 
db.profiles.save({decade: "1960", 
	 year: "1965 - elected into Congress as 1st woman of color", 
	 LeadHer: "Patsy Mink", 
	 website: "http://womenincongress.house.gov/member-profiles/profile.html?intID=173",
	 quote: "What you endure is who you are. And if you just accept and do nothing, then life goes on, but if you see it as a way for change. Life doesn't have to be so unfair. I can't change the past, but I certainly can help someone in the future so they dont have to go through what I did.",
	 bio: "Patsy Mink was a pioneering advocate on various women's issues including equal rights. One of her major victories was the passage of Title IX of the 1972 Education Amendments, which opened up opportunities for women in athletics.", 
	 supplemental: "She realized early in her House career that 'because there were only eight women at the time who were Members of Congress, that I had a special burden to bear to speak for [all women], because they didn’t have people who could express their concerns for them adequately. So, I always felt that we were serving a dual role in Congress, representing our own districts and, at the same time, having to voice the concerns of the total population of women in the country.'",
});

//Profile attributes. Coming up with a callback function to assign
//this to a Javascript object. We can then have those object attributes shown as the profile elements
store = db.profiles.find({decade: "1960"}, function(err, users) {
  if( err || !users) console.log("No profiles found");
  else console.log(profiles.decade);
  });




