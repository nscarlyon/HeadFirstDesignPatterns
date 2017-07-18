"use strict";
var ThinCrustDough_1 = require("../ingredients/ThinCrustDough");
var MarinaraSauce_1 = require("../ingredients/MarinaraSauce");
var ReggianoCheese_1 = require("../ingredients/ReggianoCheese");
var Garlic_1 = require("../ingredients/Garlic");
var Onion_1 = require("../ingredients/Onion");
var SlicedPepperoni_1 = require("../ingredients/SlicedPepperoni");
var FreshClams_1 = require("../ingredients/FreshClams");
var NYPizzaIngredientFactory = (function () {
    function NYPizzaIngredientFactory() {
    }
    NYPizzaIngredientFactory.prototype.createDough = function () {
        return new ThinCrustDough_1.ThinCrustDough();
    };
    NYPizzaIngredientFactory.prototype.createSauce = function () {
        return new MarinaraSauce_1.MarinaraSauce();
    };
    NYPizzaIngredientFactory.prototype.createCheese = function () {
        return new ReggianoCheese_1.ReggianoCheese();
    };
    NYPizzaIngredientFactory.prototype.createVeggies = function () {
        var veggies = [new Garlic_1.Garlic(), new Onion_1.Onion()];
        return veggies;
    };
    NYPizzaIngredientFactory.prototype.createPepperoni = function () {
        return new SlicedPepperoni_1.SlicedPepperoni();
    };
    NYPizzaIngredientFactory.prototype.createClam = function () {
        return new FreshClams_1.FreshClams();
    };
    return NYPizzaIngredientFactory;
}());
exports.NYPizzaIngredientFactory = NYPizzaIngredientFactory;
//# sourceMappingURL=NYPizzaIngredientFactory.js.map