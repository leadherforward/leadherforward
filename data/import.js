var $ = require('jquery');

var profiles = [];
fs = require('fs');
fs.readFile('raw_profile_data.txt', 'utf8', function(err, data){
  var raw_profiles = data.split(/--profile--/i);
  console.log(raw_profiles.length);
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
        case 'picture1':
          photo_content = field_content.split(',');
          photo_content[0] ? profile.photos.push(photo_content[0].trim()) : '';
          photo_content[1] ? profile.photo_source_names.push(photo_content[1].trim()) : '';
          photo_content[2] ? profile.photo_sources.push(photo_content[2].trim()) : '';
        break;
        default:
          profile[field_name] = field_content;
      }
    });
    profiles.push(profile);
  });
  fs.writeFile("profiles.json", JSON.stringify(profiles), function(err) {
      if(err) {
          console.log(err);
      } else {
          console.log("The file was saved!");
      }
  });
});