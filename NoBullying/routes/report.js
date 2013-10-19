
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('report', { title: 'Express' });
};