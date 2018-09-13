var express = require('express');
var router = express.Router();

let hobbies = ['Basketball', 'Catering', 'wood fire Barbeque', 'Camping', 'Traveling']

router.get('/', function(req, res, next) {
    var hobbiesJSON = JSON.stringify(hobbies);
    
 res.send(`Respond with a resource. My array of hobbies: ${hobbies}` + '. Second attempt: ' +  hobbiesJSON);


});

module.exports =  router; 





