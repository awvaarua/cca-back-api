'use strict';
const CurrencyInfo = require('../../functionalities/currency_info');

module.exports = function(Transaction) {

    Transaction.observe('after save', function incrementWalletAmmount(ctx, next) {
        if (ctx.isNewInstance !== undefined) {
            var Wallet = Transaction.app.models.Wallet;
            Wallet.findById(ctx.instance.walletId, function name(err, wallet) {
                CurrencyInfo.getCurrencyEchange(function (change) {
                    var reguard = 0.0005; // USD 0.001 -- 0.0001 (rand)
                    var increment = 0;
                    if ( change !== 0) {
                        increment = (reguard / change);
                        if (isNaN(increment)) increment = 0;
                    }
                    wallet.updateAttribute('amount', wallet.amount + increment, function name(err, wallet) {
                        next();
                    }); 
                });
            });
        }
    });
};
