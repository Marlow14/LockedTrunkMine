var express = require('express');
var json = require('../db.json');
var router = express.Router();

var cars = json.Makes;
var country;

router.get('/', function(req, res, next) {
    res.render('car', { title: 'Cars' , cars: cars });
    next();
});

router.param('make_country', function (req, res, next, make_country) {
    req.cars = cars.filter((e) => {return e.make_country == make_country});
    countries = req.cars;
    next();
});

router.get('/:make_country', function (req, res) {
    res.render('car', { title: 'Car by Country', country: countries});
  });

module.exports = router;