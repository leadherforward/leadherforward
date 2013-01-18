profiles = require('../lib/profiles.js');

exports.list = function(req, res){
  res.render('lead', {
    layout: false,
    id: req.params.id,
    lead: profiles.profiles[req.params.id].take_the_lead
  });
};