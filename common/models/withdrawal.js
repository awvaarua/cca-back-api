'use strict';
const FeeInfo = require('../../functionalities/fee_info');
const WithdrawlTrans = require('../../functionalities/withdrwal');

module.exports = function(Withdrawal) {
    /*
    Withdrawal.observe('before save', function incrementWalletAsmount(ctx, next) {
        if (ctx.isNewInstance === true) {
            var Wallet = Withdrawal.app.models.Wallet;
            Wallet.findById(ctx.instance.walletId, function name(err, wallet) {
                if (err || !wallet) return next(new Error(err));
                if (wallet.customerId != ctx.instance.userId) return next(new Error("wallet_not_owned_by_user"));
                if (isNaN(wallet.amount) || isNaN(ctx.instance.amount) || wallet.amount < ctx.instance.amount) return next(new Error("You don't have this amount"));
                FeeInfo.getFeeInfo(ctx.instance.amount, ctx.instance.toAddress, function (fee) {
                    if (wallet.amount <= fee) return next(new Error("fee_greater_than_wallet_amount"));
                    wallet.amount = wallet.amount - fee;
                    if ((wallet.amount - ctx.instance.amount) <= 0) {
                        ctx.instance.amount = wallet.amount;
                        wallet.amount = 0;
                    } else {
                        wallet.amount = wallet.amount - ctx.instance.amount;
                    }
                    wallet.save(function (err, updatedWallet) {
                        WithdrawlTrans.makeTransaction(ctx.instance.amount, ctx.instance.toAddress, function (transaction) {
                            ctx.instance.txId = transaction.txid;
                            ctx.instance.fee = transaction.network_fee;
                            ctx.instance.apiKey = '8950-77a6-8097-4c1d';
                            return next(); 
                        }, function (err = 'unexpected_error') {
                            return next(new Error(err));
                        });
                    }); 
                }, function (err = 'unexpected_error') {
                    return next(new Error(err));
                });
            });
        }
    });*/
};