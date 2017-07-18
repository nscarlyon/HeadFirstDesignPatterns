"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Pizza_1 = require("./Pizza");
var NYStyleCheesePizza = (function (_super) {
    __extends(NYStyleCheesePizza, _super);
    function NYStyleCheesePizza() {
        _super.call(this);
        this.name = "NY Style Sauce and Cheese Pizza";
        this.dough = "Thin Crust Dough";
        this.sauce = "Marinara Sauce";
        this.toppings = ["Grated", "Reggiano", "Cheese"];
    }
    return NYStyleCheesePizza;
}(Pizza_1.Pizza));
exports.NYStyleCheesePizza = NYStyleCheesePizza;
//# sourceMappingURL=NYStyleCheesePizza.js.map