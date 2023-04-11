"use strict";
exports.__esModule = true;
exports.Girafe = void 0;
var Girafe = /** @class */ (function () {
    // constructor
    function Girafe(name, height, weight) {
        this.species = 'Girafe';
        this.height = height;
        this.weight = weight;
        this.name = name;
    }
    // methods
    Girafe.prototype.move = function () {
        console.log(" ".concat(this.name, " is moving"));
    };
    return Girafe;
}());
exports.Girafe = Girafe;
