"use strict";
var duck_1 = require("../src/duck");
describe("Duck Class", function () {
    it("returns quack", function () {
        var mallard = new duck_1.MallardDuck();
        expect(mallard.quack()).toEqual("quack");
    });
});
//# sourceMappingURL=duckSpec.js.map