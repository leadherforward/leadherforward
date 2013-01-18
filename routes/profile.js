var profiles, fs;
fs = require('fs');
fs.readFile('db/profiles.json', 'utf8', function(err, data){
  profiles = JSON.parse(data);
});

exports.show = function(req, res){
  res.render('profile/show', {
    layout: false,
    id: req.params.id,
    profile: profiles[req.params.id]
  });
};

exports.list = function(req, res){
  res.render('profile/index', {
    profiles: profiles
  });
};