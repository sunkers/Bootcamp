"use strict";
exports.__esModule = true;
exports.Lion = void 0;
var Lion = /** @class */ (function () {
    // constructor
    function Lion(name, weight) {
        // variable
        // public height: number;
        this.species = 'Lion';
        this.name = name;
        // this.height = height;
        this.weight = weight;
    }
    // methods
    Lion.prototype.eat = function (girafe) {
        console.log(" ".concat(this.name, " has eaten ").concat(girafe.name));
        this.weight += girafe.weight;
        console.log(" ".concat(this.name, " weight is now ").concat(this.weight, "kg"));
    };
    return Lion;
}());
exports.Lion = Lion;
