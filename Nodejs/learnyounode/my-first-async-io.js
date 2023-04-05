// Write a program that uses a single asynchronous filesystem operation to read a file and print the number of newlines it contains to the console

const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data.split('\n').length - 1);
});