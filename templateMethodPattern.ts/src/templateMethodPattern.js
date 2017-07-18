// export class Coffee extends CaffeineBeverage {
//     brew(): string {
//         return "Dripping coffee through filter";
//     }
//
//     addCondiments(): string {
//         return "Adding sugar and milk";
//     }
// }
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CaffeineBeverage = (function () {
    function CaffeineBeverage() {
    }
    CaffeineBeverage.prototype.prepareRecipe = function () {
        var output = "";
        output += this.boilWater() + "\n";
        output += this.brew() + "\n";
        output += this.pourInCup() + "\n";
        output += this.addCondiments();
        return output;
    };
    CaffeineBeverage.prototype.boilWater = function () {
        return "Boiling water";
    };
    CaffeineBeverage.prototype.pourInCup = function () {
        return "Pouring into cup";
    };
    return CaffeineBeverage;
}());
var Tea = (function (_super) {
    __extends(Tea, _super);
    function Tea() {
        _super.apply(this, arguments);
    }
    Tea.prototype.brew = function () {
        return "Steeping the tea";
    };
    Tea.prototype.addCondiments = function () {
        return "Adding lemon";
    };
    return Tea;
}(CaffeineBeverage));
exports.Tea = Tea;
//# sourceMappingURL=templateMethodPattern.js.map