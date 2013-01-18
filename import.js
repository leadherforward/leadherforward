var $ = require('jquery');

var profiles = [];
fs = require('fs');
fs.readFile('raw_profile_data.txt', 'utf8', function(err, data){
  var raw_profiles = data.split('--profile--');
  $.each(raw_profiles, function(index, raw_profile){
    var raw_fields = raw_profile.trim().split('---');
    var profile = {
      photos: [],
      photo_source_names: [],
      photo_sources: []
    };
    $.each(raw_fields, function(index, raw_field){
      var field_name = raw_field.trim().match(/^((?:\w+|\s*)+):/m)[1].toLowerCase().replace(/\s+/, '_');
      var field_content = raw_field.replace(/^((?:\w+|\s*)+):/m, '').trim();
      switch (field_name)
      {
        case 'Picture1':
          photo_content = field_content.split(',');
          profile.photos.push(photo_content[0].trim());
          profile.photo_source_names.push(photo_content[1].trim());
          profile.photo_sources.push(photo_content[2].trim());
        break;
        default:
          profile[field_name] = field_content;
      }
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