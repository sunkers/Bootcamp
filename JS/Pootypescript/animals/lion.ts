import {Girafe} from "./girafe";
import { Animal } from './animal';


export class Lion implements Animal {
    // variable
    // public height: number;
    public species: string = 'Lion';
    public weight: number;
    public name: string;

    // constructor
    constructor(name: string, weight: number) {
        this.name = name;
        // this.height = height;
        this.weight = weight;
    }

    // methods
    public eat(girafe: Girafe): void {
        console.log(` ${this.name} has eaten ${girafe.name}`);
        this.weight += girafe.weight;
        console.log(` ${this.name} weight is now ${this.weight}kg`);
    }
}