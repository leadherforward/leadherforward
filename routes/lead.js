profiles = require('../lib/profiles.js');

exports.show = function(req, res){
  res.render('lead', {
    layout: false,
    id: req.params.id,
    lead: profiles.profiles[req.params.id].take_the_lead
  });
};

exports.list = function(req, res){
  res.render('lead_index', {
    lead: profiles.profiles.take_the_lead
  });
};