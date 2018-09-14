const express = require('express');
const router = express.Router();
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

router.get('/', function(req,res,next){
    Promise.try(()=>{
        return fs.readFileAsync('db.json', 'utf8');
    }).then(data=>{
        const cars = JSON.parse(data);

        const countries = {};

        cars.Makes.forEach(make=>{
            countries[String(make.make_country)] = 1 + (countries[String(make.make_country)] || 0); 
        })

        res.json(Object.entries(countries)
            .map(entry=> {return {country:entry[0],count:entry[1]}})
            .sort((a,b)=> b.count - a.count));
    }).catch(err =>{
        next(err);
    })
});

router.get('/2', function(req,res,next){
    Promise.try(()=>{
        return fs.readFileAsync('db.json', 'utf8');
    }).then(data=>{
        const cars = JSON.parse(data);

        res.json(cars.Makes.reduce((arr,make)=>{
            const countryElem = arr.find(elem=>elem.country == make.make_country);
            if (countryElem) 
                countryElem.count++;
            else 
                arr.push({ country:make.make_country, count:1 });
            return arr;
        },[]).sort((a,b)=> b.count - a.count));
    }).catch(err =>{
        next(err);
    })
});


});


module.exports = router;