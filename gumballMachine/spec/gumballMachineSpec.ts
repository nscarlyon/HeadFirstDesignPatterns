import {GumballMachine} from '../src/gumballMachine';

describe("Gumball Machine", () => {
    let gumballMachine = new GumballMachine(50);

    it("if you insert a quarter and turn the crank, the gumballs count goes down by 1", () => {
        gumballMachine.state.insertQuarter();
        gumballMachine.state.turnCrank();
       expect(gumballMachine.getCount()).toEqual(49);
    });

});