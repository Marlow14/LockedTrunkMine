var express = require('express');
var router = express.Router();
var moment = require('moment');
var json = require('../db.json');
const url = require('url');
const querystring = require('querystring');


router.get('/', function (req, res, next) {
    //res.send(json);

    console.log(req.query.country);
    if (req.query.country) {
        res.render('cars', {
            title: 'Cars',
            cars: json.Makes.filter((x) => (x.make_country).toUpperCase() === (req.query.country).toUpperCase())
        });
    }
    else {
        res.render('cars', {
            title: 'Cars',
            cars: json.Makes

        });
    }
});

router.get('/unique', function (req, res, next) {
    //res.send(agg_by_country());
    res.render('cars_report', {
        title: 'Count By Country',
        cars: agg_by_country()

    });
});

router.get('/:country', function (req, res) {
    res.render('cars', {
        title: 'Cars',
        cars: json.Makes.filter((x) => x.make_country.toUpperCase() === req.params.country.toUpperCase())

    });
});


function get_unique_country() {
    var lookup = {};
    var items = json.Makes;
    var result = [];

    for (var item, i = 0; item = items[i++];) {
        var name = item.make_country;

        if (!(name in lookup)) {
            lookup[name] = 1;
            result.push(name);
        }
    }
    return result;
}



function agg_by_country() {
    var result = [];
    var items = json.Makes;
    var countries = get_unique_country().sort();

    for (var country, j = 0; country = countries[j++];) {
        var cnt = 0;
        for (var item, i = 0; item = items[i++];) {
            var name = item.make_country;

            if ((name === country)) {
                cnt = cnt + 1;
            }
        }
        result.push({ country_name: country, unique_count: cnt });
    }
    return result;

}
module.exports = router;