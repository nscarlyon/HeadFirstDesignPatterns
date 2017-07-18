import {Beverage, Espresso, DarkRoast, Mocha, Whip} from "../src/decoratorPattern";
describe('Decorator Pattern Tests', () => {

    it('should get cost and description of espresso', () => {
       let beverage: Beverage = new Espresso();
       expect(beverage.getDescription()).toEqual("Espresso");
       expect(beverage.cost()).toEqual(1.99);
    });

    it('should get cost and description of dark roast with two mochas and whip', () => {
       let beverage: Beverage = new DarkRoast();
       beverage = new Mocha(beverage);
       beverage = new Mocha(beverage);
       beverage = new Whip(beverage);
       expect(beverage.getDescription()).toEqual("Dark Roast Coffee, Mocha, Mocha, Whip");
       expect(beverage.cost()).toEqual(1.49);
    });

    it('should get cost of a grande espresso with mocha', () => {
       let beverage: Beverage = new Espresso();
       beverage.setSize("grande");
       beverage = new Mocha(beverage);
       expect(beverage.cost()).toEqual(2.24);
    });

});