var profiles = require('../lib/profiles.js');
var jQuery = require('jquery');

exports.show = function(req, res){
  res.render('lead', {
    layout: false,
    id: req.params.id,
    lead: profiles.profiles[req.params.id].take_the_lead
  });
};

exports.list = function(req, res){
  var lead_profiles = jQuery.map(profiles.profiles, function(profile, i){
    if(profile.take_the_lead){
      return profile;
    }
  });
  res.render('lead_index', {
    profiles: lead_profiles
  });
};