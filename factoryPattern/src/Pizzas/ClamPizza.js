"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Pizza_1 = require("./Pizza");
var ClamPizza = (function (_super) {
    __extends(ClamPizza, _super);
    function ClamPizza(ingredientFactory) {
        _super.call(this);
        this.ingredientFactory = ingredientFactory;
    }
    ClamPizza.prototype.prepare = function () {
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.cheese = this.ingredientFactory.createCheese();
        this.veggies = this.ingredientFactory.createVeggies();
        this.clams = this.ingredientFactory.createClam();
        return "Preparing" + this.name;
    };
    return ClamPizza;
}(Pizza_1.Pizza));
exports.ClamPizza = ClamPizza;
//# sourceMappingURL=ClamPizza.js.map