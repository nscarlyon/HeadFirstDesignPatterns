"use strict";
var PizzaStore = (function () {
    function PizzaStore() {
    }
    PizzaStore.prototype.orderPizza = function (type) {
        var pizza = this.createPizza(type);
        var orderedPizza = "Making a " + pizza.getName();
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    };
    return PizzaStore;
}());
exports.PizzaStore = PizzaStore;
//# sourceMappingURL=PizzaStore.js.map