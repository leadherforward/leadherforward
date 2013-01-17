var profiles, fs;
fs = require('fs');
fs.readFile('db/profiles.json', 'utf8', function(err, data){
  profiles = JSON.parse(data);
});

exports.list = function(req, res){
  res.render('lead', {
    lead: profiles[req.params.id].take_the_lead
  });
};