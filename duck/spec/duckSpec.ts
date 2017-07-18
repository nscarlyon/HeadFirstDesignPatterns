import {Duck, MallardDuck, QuackBehavior, Quack} from "../src/duck";

describe("Duck Class", () => {

    it("returns quack", () => {
        let mallard: Duck = new MallardDuck();
        expect(mallard.quack()).toEqual("quack");
    });

});