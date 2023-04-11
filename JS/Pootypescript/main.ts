import { Girafe } from "./animals/girafe";
import { Lion } from "./animals/lion";
import { Zoo } from "./zoo/zoo";

let CentralPark = new Zoo('Central Park', 0, 0);
let Sophie = new Girafe('Sophie', 2.5 , 500);
CentralPark.addAnimal('Girafe', 'Sophie', 2.5);
let Alex = new Lion('Alex', 350);
CentralPark.addAnimal('Lion', 'Alex', 350);

Sophie.move();
Alex.eat(Sophie);
