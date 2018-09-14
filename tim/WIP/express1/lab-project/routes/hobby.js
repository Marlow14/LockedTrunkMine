var express = require('express');
var router = express.Router();

const hobbies = [
    {name:'bowling',years:3},
    {name:'fishing',years:15},
    {name:'hunting',years:3}
]

router.get('/', function(req,res){

    res.render('hobbies', {hobbies: hobbies});
});

module.exports = router;