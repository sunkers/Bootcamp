"use strict";
exports.__esModule = true;
exports.Zoo = void 0;
var Zoo = /** @class */ (function () {
    // constructor
    function Zoo(name, nbSpecies, nbAnimals) {
        this.name = name;
        this.nbSpecies = nbSpecies;
        this.nbAnimals = nbAnimals;
    }
    // methods
    Zoo.prototype.addAnimal = function (species, name, weight) {
        console.log(" ".concat(this.name, " has a new animal: ").concat(name, " the ").concat(species, " weighing ").concat(weight, "kg"));
        this.nbAnimals++;
        console.log(" ".concat(this.name, " has now ").concat(this.nbAnimals, " animals"));
    };
    return Zoo;
}());
exports.Zoo = Zoo;
