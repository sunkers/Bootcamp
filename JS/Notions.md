# Notions Javascript / TS
## Javascript
### Variables
`code`
    var a = 1; 
    let b = 2;
    const c = 3;
`code`

### Boucles
`code`    
        for (let i = 0; i < 10; i++) {
            console.log(i);
        }
`code`
`code`    
        let i = 0;
        while (i < 10) {
            console.log(i);
            i++;
        }
`code`
`code`    
        let i = 0;
        do {
            console.log(i);
            i++;
        } while (i < 10);
`code`

### Fonctions
`code`
    function add(a, b) {
        return a + b;
    }
`code`
`code`    
    const add = (a, b) => {
        return a + b;
    }
`code`
`code`    
    const add = (a, b) => a + b;
`code`

### Manipulation du DOM

`code`
    const h1 = document.querySelector('h1');
    h1.style.color = 'red';
`code`


