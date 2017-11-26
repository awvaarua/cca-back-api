'use strict';

module.exports = function(Transaction) {

    Transaction.observe('after save', function removeUnwantedField(ctx, next) {
        if (ctx.isNewInstance !== undefined) {
            var Wallet = Transaction.app.models.Wallet;
            Wallet.findById(ctx.instance.walletId, function name(err, wallet) {
                //Get currency + real time cnversion
                wallet.updateAttribute('amount', wallet.amount + ctx.instance.amount, function name(err, wallet) {
                })
            });
        }
        next();
      });

};
