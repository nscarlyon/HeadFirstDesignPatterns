"use strict";
var gumballMachine_1 = require('../src/gumballMachine');
describe("Gumball Machine", function () {
    var gumballMachine = new gumballMachine_1.GumballMachine(50);
    it("if you insert a quarter and turn the crank, the gumballs count goes down by 1", function () {
        gumballMachine.state.insertQuarter();
        gumballMachine.state.turnCrank();
        expect(gumballMachine.getCount()).toEqual(49);
    });
});
//# sourceMappingURL=gumballMachineSpec.js.map