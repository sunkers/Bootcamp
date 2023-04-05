const name = 'John Doe';
const age = 42;
const passions = ['Ski', 'Snowboard', 'VTT'];

function displayPassion() {
    console.log('My passions are: ');
    for(let i = 0; i < passions.length; i++) {
        console.log(`- ${passions[i]}`);
    }
}

module.exports = {
    name: name,
    age: age,
    displayPassion: displayPassion
}