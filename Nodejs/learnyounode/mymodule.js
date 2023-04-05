const fs = require('fs');
const path = require('path');

module.exports = (dirName, extFile, callback) => {
    fs.readdir(dirName, (err, list) => {
        if (err) return callback(err);

        list.forEach(file => {
            if (path.extname(file) === extFile) {
              console.log(file);
            }
        });
        // callback();
    });
}
