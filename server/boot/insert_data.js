'use strict';

module.exports = function(app) {
    var Customer = app.models.Customer;
    Customer.create({email: 'sanso.barcelo94@gmail.com', password: 'fura4468AB'}, function(err, user) {
      console.log(user);

    });
};
