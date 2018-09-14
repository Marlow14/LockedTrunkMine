const fs = require('fs');
const path = require('path');

function listFiles(dirname, extension, callback) {
    fs.readdir(dirname, function(err, filenames){
        try {
            if (err) {
                callback(err);
            } else {
                callback(null, filenames.filter(filename => path.extname(filename)== '.'+extension));
            }
        } catch (error) {
            callback(error);
        }
    });
}

module.exports = listFiles;