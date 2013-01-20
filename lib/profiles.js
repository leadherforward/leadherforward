var profiles, fs;
fs = require('fs');
fs.readFile('data/profiles.json', 'utf8', function(err, data){
  profiles = JSON.parse(data);
  exports.profiles = profiles;
});
