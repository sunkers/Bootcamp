// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });

// app.listen(port, () => {
//   console.log(`Application exemple à l'écoute sur le port ${port}!`)
// });

// process.stdin.resume();
// process.stdin.setEncoding('utf8');

// console.log('What\'s your name?')
// process.stdin.on('data', (text) => {
//     console.log('Hello ' + text)
//     process.exit()
// })

// Cette application doit demander à l’utilisateur son âge et, à partir de cette valeur, lui retourner son année de naissance.

// 1. Demander l'age de l'utilisateur

console.log('How old are you?');

// 2. Récupérer l'age de l'utilisateur
process.stdin.on('data', (input) => {
    age = Number(input);

    if (isNaN(age)) {
        console.log('Please enter a number');
        process.exit();
    }
    if (age < 0) {
        console.log('Please enter a positive number');
        process.exit();
    };
    if (age > 99) {
        console.log('Please enter a realistic number');
        process.exit();
    };

    console.log('You are ' + age + ' years old');
    // 3. Calculer l'année de naissance
    const birthYear = 2023 - age;

    // 4. Afficher l'année de naissance
    console.log('You were born in ' + birthYear);
    process.exit()
})
