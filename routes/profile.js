profiles = require('../lib/profiles.js');

exports.show = function(req, res){
  res.render('profile/show', {
    layout: false,
    id: req.params.id,
    profile: profiles.profiles[req.params.id]
  });
};

exports.list = function(req, res){
  res.render('profile/index', {
    profiles: profiles.profiles
  });
};