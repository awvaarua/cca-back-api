'use strict';

module.exports = function(app) {
    var Customer = app.models.Customer;
    var CurrencyType = app.models.CurrencyType;
    var Wallet = app.models.Wallet;
    Customer.create({email: 'sanso.barcelo94@gmail.com', password: 'fura4468AB'}, function(err, user) {
      CurrencyType.create({name: "Dogecoin", shortName: "DOGE", icon: "fdsfsdfsf"}, function (err, currencyType){
        Wallet.create({
          currencyTypeId: currencyType.id,
          customerId: user.id
        });
        /*
        Wallet.create({
          currencyTypeId: currencyType.id,
          customerId: user.id,
          amount: 20
        });
        Wallet.create({
          currencyTypeId: currencyType.id,
          customerId: user.id,
          amount: 10
        });*/
      });
      console.log(user);
    });
};
