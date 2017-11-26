var md5 = require('md5');
module.exports = function(app) {
  var Transaction = app.models.Transaction;
  app.get('/transactions/callback', function(req, res) {
    var hash_result = md5(req.query.id + req.query.uid + req.query.amount + req.query.currency + 'v4vcc9732376238f40929a' + req.query.custom_id);
    if (req.query.verifier != hash_result) return res.send('vc_decline');
    var data = req.query.custom_id.split('#');
    Transaction.create({
      uid: req.query.uid,
      customerId: parseInt(data[0]),
      zone: req.query.zone,
      amount: req.query.amount,
      verifier: req.query.verifier,
      walletId: data[1]
    });
    res.send('vc_success');
  });
}
