var profiles, fs;
fs = require('fs');
fs.readFile('db/profiles.json', 'utf8', function(err, data){
  profiles = JSON.parse(data);
});

exports.list = function(req, res){
  res.render('profile/show', {
    layout: false,
    profile: profiles[0]
  });
};