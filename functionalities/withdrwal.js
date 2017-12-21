const superagent = require('superagent');

module.exports = { makeTransaction };

function makeTransaction (amount, address, callbackOk, callbackErr) {
    makeFullTransaction(amount, address, function (res) {
    if (res.body.status === 'success') {
      callbackOk(res.body.data);
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
    "txid" : "c702691213fec0478157ae61a80cd70f35a7cc22ee83acc4bf908971258e6a61",
    "amount_withdrawn" : "0.01021600",
    "amount_sent" : "0.01000000",
    "network_fee" : "0.00021600",
    "blockio_fee" : "0.00000000"
  }
}
*/

function makeFullTransaction (amount, address, callbackOk, callbackErr) {
  return superagent.get('https://block.io/api/v2/withdraw/?api_key=8950-77a6-8097-4c1d&amounts='+amount+'&to_addresses='+address+'&pin=Serviette90AB')
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .then(callbackOk)
    .catch(callbackErr);
}