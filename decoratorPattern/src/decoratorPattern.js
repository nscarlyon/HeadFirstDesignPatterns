"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Beverage = (function () {
    function Beverage() {
        this.description = "Unknown Beverage";
        this.size = "tall";
    }
    Beverage.prototype.setSize = function (size) {
        this.size = size;
    };
    ;
    Beverage.prototype.getSize = function () {
        return this.size;
    };
    ;
    Beverage.prototype.getDescription = function () {
        return this.description;
    };
    return Beverage;
}());
exports.Beverage = Beverage;
var CondimentDecorator = (function (_super) {
    __extends(CondimentDecorator, _super);
    function CondimentDecorator() {
        _super.apply(this, arguments);
    }
    return CondimentDecorator;
}(Beverage));
exports.CondimentDecorator = CondimentDecorator;
var Espresso = (function (_super) {
    __extends(Espresso, _super);
    function Espresso() {
        _super.call(this);
        this.description = "Espresso";
    }
    Espresso.prototype.cost = function () {
        return 1.99;
    };
    return Espresso;
}(Beverage));
exports.Espresso = Espresso;
var HouseBlend = (function (_super) {
    __extends(HouseBlend, _super);
    function HouseBlend() {
        _super.call(this);
        this.description = "House Blend Coffee";
    }
    HouseBlend.prototype.cost = function () {
        return .89;
    };
    return HouseBlend;
}(Beverage));
exports.HouseBlend = HouseBlend;
var DarkRoast = (function (_super) {
    __extends(DarkRoast, _super);
    function DarkRoast() {
        _super.call(this);
        this.description = "Dark Roast Coffee";
    }
    DarkRoast.prototype.cost = function () {
        return .99;
    };
    return DarkRoast;
}(Beverage));
exports.DarkRoast = DarkRoast;
var Mocha = (function (_super) {
    __extends(Mocha, _super);
    function Mocha(beverage) {
        _super.call(this);
        this.beverage = beverage;
    }
    Mocha.prototype.getDescription = function () {
        return this.beverage.getDescription() + ", Mocha";
    };
    Mocha.prototype.cost = function () {
        if (this.beverage.getSize() === "tall")
            return .20 + this.beverage.cost();
        if (this.beverage.getSize() === "grande")
            return .25 + this.beverage.cost();
        if (this.beverage.getSize() === "venti")
            return .30 + this.beverage.cost();
    };
    return Mocha;
}(CondimentDecorator));
exports.Mocha = Mocha;
var Whip = (function (_super) {
    __extends(Whip, _super);
    function Whip(beverage) {
        _super.call(this);
        this.beverage = beverage;
    }
    Whip.prototype.getDescription = function () {
        return this.beverage.getDescription() + ", Whip";
    };
    Whip.prototype.cost = function () {
        return .10 + this.beverage.cost();
    };
    return Whip;
}(CondimentDecorator));
exports.Whip = Whip;
//# sourceMappingURL=decoratorPattern.js.map