"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Pizza_1 = require("./Pizza");
var VeggiePizza = (function (_super) {
    __extends(VeggiePizza, _super);
    function VeggiePizza(ingredientFactory) {
        _super.call(this);
        this.ingredientFactory = ingredientFactory;
    }
    VeggiePizza.prototype.prepare = function () {
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.veggies = this.ingredientFactory.createVeggies();
        this.clams = this.ingredientFactory.createClam();
        return "Preparing" + this.name;
    };
    return VeggiePizza;
}(Pizza_1.Pizza));
exports.VeggiePizza = VeggiePizza;
//# sourceMappingURL=VeggiePizza.js.map