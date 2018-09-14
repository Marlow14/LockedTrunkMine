var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET hobbies listing. */
router.get('/', function(req, res, next) {
    fs.readFile('../hobbies.json', function (err, data) {
        if (err) {
           return console.error(err);
        }
        console.log("Asynchronous read: " + data);
        res.send(data.toString());
     });
  
});

module.exports = router;