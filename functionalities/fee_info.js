const superagent = require('superagent');

module.exports = { getFeeInfo };

function getFeeInfo (amount, address, callbackOk, callbackErr) {
    getFullFeeInfo(amount, address, function (res) {
    if (res.body.status === 'success') {
      callbackOk(res.body.data.estimated_network_fee);
    } else {
      callbackErr(res.error);
    }
  }, callbackErr);
}

/*
{
    "status" : "success",
    "data" : {
        "network" : "LTCTEST",
        "estimated_network_fee" : "0.00034900"
    }
}
*/

function getFullFeeInfo (amount, address, callbackOk, callbackErr) {
  return superagent.get('https://block.io/api/v2/get_network_fee_estimate/?api_key=8950-77a6-8097-4c1d&amounts='+amount+'&to_addresses='+address)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .then(callbackOk)
    .catch(callbackErr);
}