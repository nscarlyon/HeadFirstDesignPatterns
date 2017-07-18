"use strict";
var ThickCrustDough_1 = require("../ingredients/ThickCrustDough");
var PlumTomatoSauce_1 = require("../ingredients/PlumTomatoSauce");
var MozzarellaCheese_1 = require("../ingredients/MozzarellaCheese");
var BlackOlives_1 = require("../ingredients/BlackOlives");
var Mushroom_1 = require("../ingredients/Mushroom");
var SlicedPepperoni_1 = require("../ingredients/SlicedPepperoni");
var FreshClams_1 = require("../ingredients/FreshClams");
var ChicagoPizzaIngredientFactory = (function () {
    function ChicagoPizzaIngredientFactory() {
    }
    ChicagoPizzaIngredientFactory.prototype.createDough = function () {
        return new ThickCrustDough_1.ThickCrustDough();
    };
    ChicagoPizzaIngredientFactory.prototype.createSauce = function () {
        return new PlumTomatoSauce_1.PlumTomatoSauce();
    };
    ChicagoPizzaIngredientFactory.prototype.createCheese = function () {
        return new MozzarellaCheese_1.MozzarellaCheese();
    };
    ChicagoPizzaIngredientFactory.prototype.createVeggies = function () {
        var veggies = [new BlackOlives_1.BlackOlives(), new Mushroom_1.Mushroom()];
        return veggies;
    };
    ChicagoPizzaIngredientFactory.prototype.createPepperoni = function () {
        return new SlicedPepperoni_1.SlicedPepperoni();
    };
    ChicagoPizzaIngredientFactory.prototype.createClam = function () {
        return new FreshClams_1.FreshClams();
    };
    return ChicagoPizzaIngredientFactory;
}());
exports.ChicagoPizzaIngredientFactory = ChicagoPizzaIngredientFactory;
//# sourceMappingURL=ChicagoPizzaIngredientFactory.js.map