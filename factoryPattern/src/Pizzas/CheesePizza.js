"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Pizza_1 = require("./Pizza");
var CheesePizza = (function (_super) {
    __extends(CheesePizza, _super);
    function CheesePizza(ingredientFactory) {
        _super.call(this);
        this.ingredientFactory = ingredientFactory;
    }
    CheesePizza.prototype.prepare = function () {
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.cheese = this.ingredientFactory.createCheese();
        this.veggies = this.ingredientFactory.createVeggies();
        this.clams = this.ingredientFactory.createClam();
        return "Preparing" + this.name;
    };
    return CheesePizza;
}(Pizza_1.Pizza));
exports.CheesePizza = CheesePizza;
//# sourceMappingURL=CheesePizza.js.map