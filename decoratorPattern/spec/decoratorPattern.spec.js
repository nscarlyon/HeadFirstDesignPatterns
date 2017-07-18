"use strict";
var decoratorPattern_1 = require("../src/decoratorPattern");
describe('Decorator Pattern Tests', function () {
    it('should get cost and description of espresso', function () {
        var beverage = new decoratorPattern_1.Espresso();
        expect(beverage.getDescription()).toEqual("Espresso");
        expect(beverage.cost()).toEqual(1.99);
    });
    it('should get cost and description of dark roast with two mochas and whip', function () {
        var beverage = new decoratorPattern_1.DarkRoast();
        beverage = new decoratorPattern_1.Mocha(beverage);
        beverage = new decoratorPattern_1.Mocha(beverage);
        beverage = new decoratorPattern_1.Whip(beverage);
        expect(beverage.getDescription()).toEqual("Dark Roast Coffee, Mocha, Mocha, Whip");
        expect(beverage.cost()).toEqual(1.49);
    });
    it('should get cost of a grande espresso with mocha', function () {
        var beverage = new decoratorPattern_1.Espresso();
        beverage.setSize("grande");
        beverage = new decoratorPattern_1.Mocha(beverage);
        expect(beverage.cost()).toEqual(2.24);
    });
});
//# sourceMappingURL=decoratorPattern.spec.js.map