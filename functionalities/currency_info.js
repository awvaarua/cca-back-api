const superagent = require('superagent');

module.exports = { getCurrencyEchange };

function getCurrencyEchange (callbackOk, callbackErr) {
  getFullCurrencyEchange(function (res) {
    if (res.body.success) {
      callbackOk(res.body.ticker.price);
    } else {
      callbackErr(res.error);
    }
  }, callbackErr);
}

function getFullCurrencyEchange (callbackOk, callbackErr) {
  return superagent.get('https://api.cryptonator.com/api/ticker/doge-usd')
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .then(callbackOk)
    .catch(callbackErr);
}