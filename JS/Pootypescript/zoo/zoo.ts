export class Zoo {
    // variable
    public name: string;
    public nbSpecies: number;
    public nbAnimals: number;

    // constructor
    constructor( name: string, nbSpecies: number, nbAnimals: number) {
        this.name = name;
        this.nbSpecies = nbSpecies;
        this.nbAnimals = nbAnimals;
    }

    // methods
    public addAnimal(species: string,name: string, weight: number): void {
        console.log(` ${this.name} has a new animal: ${name} the ${species} weighing ${weight}kg`);
        this.nbAnimals++;
        console.log(` ${this.name} has now ${this.nbAnimals} animals`);

    }
}