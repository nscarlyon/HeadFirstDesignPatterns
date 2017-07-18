"use strict";
var Pizza = (function () {
    function Pizza() {
    }
    Pizza.prototype.bake = function () {
        return "bake pizza";
    };
    ;
    Pizza.prototype.cut = function () {
        return "cutting the pizza into triangle slices";
    };
    ;
    Pizza.prototype.box = function () {
        return "box pizza";
    };
    ;
    Pizza.prototype.setName = function (name) {
        this.name = name;
    };
    Pizza.prototype.getName = function () {
        return this.name;
    };
    return Pizza;
}());
exports.Pizza = Pizza;
//# sourceMappingURL=Pizza.js.map