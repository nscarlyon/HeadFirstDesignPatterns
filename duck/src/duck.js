"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Duck = (function () {
    function Duck() {
    }
    Duck.prototype.quack = function () {
        console.log(this.quackBehavior.quack());
    };
    return Duck;
}());
var MallardDuck = (function (_super) {
    __extends(MallardDuck, _super);
    function MallardDuck() {
        _super.call(this);
        this.quackBehavior = new Quack();
    }
    return MallardDuck;
}(Duck));
exports.MallardDuck = MallardDuck;
var Quack = (function () {
    function Quack() {
    }
    Quack.prototype.quack = function () {
        console.log("quack");
    };
    return Quack;
}());
//# sourceMappingURL=duck.js.map