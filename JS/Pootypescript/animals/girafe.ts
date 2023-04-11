import { Animal } from './animal';

export class Girafe implements Animal {
    // variable
    public height: number;
    public species: string= 'Girafe';
    public weight: number;
    public name: string;

    // constructor
    constructor(name: string, height: number, weight: number) {
        this.height = height;
        this.weight = weight;
        this.name = name;
    }

    // methods
    public move(): void {
        console.log(` ${this.name} is moving`);
    }
}