var express = require('express');
var router = express.Router();
var createError = require('http-errors');
var fs = require("fs");


const Promise = require("bluebird");
const pfs = Promise.promisifyAll(fs);

router.get('/cars', function (req, res, next) {

    let fileName = "db.json";

   
    Promise.try(() => {
        return fs.readFileAsync(fileName);
    }).then((data) => {
        var carsParsed = JSON.parse(data.toString());
        return carsParsed;
    }).then((carsParsed) => {
        if (req.query.country == null) {
            res.send(`All cars read: ${JSON.stringify(carsParsed.Makes)}`);

        }
        return carsParsed;
    }).then((carsParsed) => {
        if (req.query.country != null) {
                              
            let country = req.query.country;
           
            var carsResults = carsParsed.Makes.filter((e) => { return e.make_country == country });
            
            res.send(`Read Cars by country read: ${JSON.stringify(carsResults)}`);
        }
    }).catch(err => {
        next(err);
    });


})

router.get('/unique', function (req, res, next) {
    Promise.try(() => {
        return fs.readFileAsync(fileName);
    }).then((data) => {
        var carsParsed = JSON.parse(data.toString());
        return carsParsed.Makes;
    }).then((cars) => {
        for(var car in cars){
            // if (car.country )
        }
    })

})

module.exports = router;


