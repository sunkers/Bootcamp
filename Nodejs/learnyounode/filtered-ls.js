//   Create a program that prints a list of files in a given directory,  
//   filtered by the extension of the files. You will be provided a directory  
//   name as the first argument to your program (e.g. '/path/to/dir/') and a  
//   file extension to filter by as the second argument. 

const fs = require('fs');
const path = require('path');

const dirName = process.argv[2];
const extFile = '.' + process.argv[3];

fs.readdir(dirName, (err, list) => {
  if (err) throw err;
  list.forEach(file => {
    if (path.extname(file) === extFile) {
      console.log(file);
    }
  });
});