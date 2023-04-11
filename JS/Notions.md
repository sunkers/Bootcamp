# Notions Javascript / TS
## Javascript
### Variables
`    var a = 1; 
    let b = 2;
    const c = 3;`


### Boucles
    
`        for (let i = 0; i < 10; i++) {
            console.log(i);
        }`

    
`        let i = 0;
        while (i < 10) {
            console.log(i);
            i++;
        }`

    
`        let i = 0;
        do {
            console.log(i);
            i++;
        } while (i < 10);`


### Fonctions

`    function add(a, b) {
        return a + b;
    }`

    
`    const add = (a, b) => {
        return a + b;
    }`

    
`    const add = (a, b) => a + b;`


### Manipulation du DOM


`    const h1 = document.querySelector('h1');
    h1.style.color = 'red';`

`document.getElementById('id'); 
document.getElementsByTagName('tag'); 
document.querySelectorAll('selector');
document.createElement('div');
someDiv.style.backgroundColor = 'red';
someText.style.fontSize = '2em';
someDiv.addEventListener('click', function() {
    alert('clicked');
});`

## Typescript
https://rmolinamir.github.io/typescript-cheatsheet/#types

### Variables
`   
let a: number = 1;
let b: string = '2';
let c: boolean = true;
let d: any = 4;`
const hobbies: string[] = ['Sports', 'Cooking'];
let myCar: any = 'BMW';
myCar = { brand: 'BMW', series: 3 }; // a éviter

enum Color {
    Gray, // 0
    Green = 100, // 100
    Blue // 101
}
const myColor: Color = Color.Green;

### Fonctions

`    function add(a: number, b: number): number {
        return a + b;
    }`

### Optional Properties

`    function add(a: number, b?: number): number {
        return a + b;
    }`

`   const right: { name: string, age?: number } = {
        name: 'Max'
    };`

### Union

let myRealAge: number | string = 27;