var md5 = require('md5');
module.exports = function(app) {
  app.get('/transactions/callback', function(req, res) {
    //  console.log(req.query.id + ', ' + req.query.uid + ', ' + req.query.amount + ', ' + req.query.currency + ', ' + 'v4vcc9732376238f40929a' + ', ' + req.query.custom_id);
    var hash_result = md5(req.query.id + req.query.uid + req.query.amount + req.query.currency + 'v4vcc9732376238f40929a' + req.query.custom_id);
    if (req.query.verifier != hash_result) return res.send('vc_decline');
    console.log(req.query);
    res.send('vc_success');
  });
}
