"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PizzaStore_1 = require("./PizzaStore");
var NYPizzaIngredientFactory_1 = require("../IngredientFactory/NYPizzaIngredientFactory");
var CheesePizza_1 = require("../Pizzas/CheesePizza");
var ClamPizza_1 = require("../Pizzas/ClamPizza");
var VeggiePizza_1 = require("../Pizzas/VeggiePizza");
var PepperoniPizza_1 = require("../Pizzas/PepperoniPizza");
var NYPizzaStore = (function (_super) {
    __extends(NYPizzaStore, _super);
    function NYPizzaStore() {
        _super.apply(this, arguments);
    }
    NYPizzaStore.prototype.createPizza = function (item) {
        var pizza = null;
        var ingredientFactory = new NYPizzaIngredientFactory_1.NYPizzaIngredientFactory();
        if (item === "cheese") {
            pizza = new CheesePizza_1.CheesePizza(ingredientFactory);
            pizza.setName("New York Style Cheese Pizza");
        }
        else if (item === "clam") {
            pizza = new ClamPizza_1.ClamPizza(ingredientFactory);
            pizza.setName("New York Style Clam Pizza");
        }
        else if (item === "veggie") {
            pizza = new VeggiePizza_1.VeggiePizza(ingredientFactory);
            pizza.setName("New York Style Veggie Pizza");
        }
        else if (item === "pepperoni") {
            pizza = new PepperoniPizza_1.PepperoniPizza(ingredientFactory);
            pizza.setName("New York Style Pepperoni Pizza");
        }
        return pizza;
    };
    return NYPizzaStore;
}(PizzaStore_1.PizzaStore));
exports.NYPizzaStore = NYPizzaStore;
//# sourceMappingURL=NYPizzaStore.js.map