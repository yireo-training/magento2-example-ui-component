define([
    'uiComponent',
    'Magento_Customer/js/customer-data'
], function(Component, customerData) {
    var cart = customerData.get('cart');

    return Component.extend({
        initialize: function() {
            this._super();
            this.cart = cart;
        }
    });
});