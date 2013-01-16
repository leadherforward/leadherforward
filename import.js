var $ = require('jquery');

var profiles = [];
fs = require('fs');
fs.readFile('raw_profile_data.txt', 'utf8', function(err, data){
  var raw_profiles = data.split('--profile--');
  $.each(raw_profiles, function(index, raw_profile){
    var raw_fields = raw_profile.trim().split('---');
    var profile = {};
    $.each(raw_fields, function(index, raw_field){
      var field_name = raw_field.trim().match(/^((?:\w+|\s*)+):/m)[1].toLowerCase().replace(/\s+/, '_');
      var field_content = raw_field.replace(/^((?:\w+|\s*)+):/m, '').trim();
      profile[field_name] = field_content;
    });
    profiles.push(profile);
  });
  console.log(profiles);
  fs.writeFile("db/profiles.json", JSON.stringify(profiles), function(err) {
      if(err) {
          console.log(err);
      } else {
          console.log("The file was saved!");
      }
  });
});