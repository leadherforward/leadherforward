
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};

exports.timeline = function(req, res){
  res.render('timeline');
};  

exports.sources = function(req, res){
  res.render('sources');
};  