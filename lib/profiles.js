var profiles, fs;
fs = require('fs');
fs.readFile('db/profiles.json', 'utf8', function(err, data){
  profiles = JSON.parse(data);
  exports.profiles = profiles;
});
