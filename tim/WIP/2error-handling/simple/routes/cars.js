var express = require('express');
var router = express.Router();
var fs = require('fs');

router.use(function(req,res,next){
    fs.readFile('db.json', function(err,data) {
        if (err) next(err);

        const cars = JSON.parse(data);
        req.cars = cars;
        next();
    })
})

router.get('/', function(req,res,next){
    const country = req.query.country;
    console.log(country);

    res.json(req.cars.Makes.filter(car=> (!country)||car.make_country == country));
});

router.get('/country/:country', function(req,res,next){
    const country = req.params.country;
    console.log(country);

    res.json(req.cars.Makes.filter(car=> car.make_country == country));
});

router.get('/countries', function(req,res,next){
    var countries = {};
    req.cars.Makes.forEach(make=>{
        countries[String(make.make_country)] = 1 + (countries[String(make.make_country)] || 0); 
    })
    res.json(Object.entries(countries).map(entry=> {return {country:entry[0],count:entry[1]}}));
})

module.exports = router;