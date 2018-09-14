var express = require('express');
var router = express.Router();
var createError = require('http-errors');
var fs = require("fs");

let fileName = './db.json';

/* GET home page. */
router.get('/', function (req, res, next) {
  let html = `<p>These links throw errors. </p>
   <ul>
   <li> <a href="/foobar">This is a link to /foobar which doesnt have a route</a></li>

</ul>

  `;
  res.send(html);
});


/* Notice how this calls a function that doesnt exist - notAFunction. This will throw an error so that next() is never called. But Express takes care of this and will also forward on the error handling middleware. Open in the browser, is it picked up by the error handler? */

router.use('/throwserror', function (req, res, next) {
  console.log(`the following function doesnt exist`);

  notAFunction();

  next();
});


/* This simulates a service not being avaiable by creating a 503 error with a custom message and passing this into next().  Open in the browser, is it picked up by the error handler? */

router.use('/mtgox', function (req, res, next) {
  console.log(`Let's pretend another webservice is too busy and times out`);

  //call 3rd party service, times out - so we throw error with 503
  next(createError(503, "Service temporarily unavailable", { expose: false }));
});


/* Notice how the following uses a query string to pass the filename

Notice how it uses two callbacks. You can string together as many as you like, these are additional middleware that gets called in order. Notice the difference in the way fs.writeFile is called. next will be called, either with or without the error. If it is with an error, then it gets picked up by the errorhandler. Otherwise a response of OK is returned. Load this route in the browser, is it picked up by the error handler?


First load this route using
http://localhost:3000/filewrite?filename=demo.text
then using
http://localhost:3000/filewrite

*/
router.get("/filewrite", function (req, res, next) {
  let fileName = req.query.filename;
  fs.writeFile(fileName, "This is some demo text from " + req.path, next);
  //next gets called with or without the error
},
  function (req, res) { //this fires if next is called w no error
    res.send("OK");
  }
);

/* Notice how this uses an error first call back and calls next passing the err. Load this route in the browser, is it picked up by the error handler?
http://localhost:3000/fileread?filename=demo.text
then using
http://localhost:3000/fileread
*/
router.get("/fileread", function (req, res, next) {
  let fileName = req.query.filename;

  fs.readFile(fileName, function (err, data) {
    if (err) {
      next(createError(400, "invalid filename")); // Explicitly Pass errors to Express.
    }
    else {
      res.send("file contents: " + data.toString());
    }
  });
});


const Promise = require("bluebird");
const pfs = Promise.promisifyAll(fs);

//Good URL: http://localhost:3000/filewritepromise?filename=demo.text
//Bad URL: http://localhost:3000/filewritepromise
router.get("/filewritepromise", function (req, res, next) {
  let fileName = req.query.filename;

  Promise.try(() => {
    return fs.writeFileAsync(fileName, "Promises are cool! But you MUST call next on errors");
  }).then(() => {
    console.log("Data written successfully!");
    console.log("Let's read newly written data");
    return fs.readFileAsync(fileName);
  }).then((data) => {
    res.send(`Asynchronous read: ${data.toString()}`);
  }).catch(err => {
    next(err);
  });
});

//In this example, a developer might have been distracted and forgot to do something...read through the code.. 
//Try this URL: http://localhost:3000/filewritepromisenonext
router.get("/filewritepromisenonext", function (req, res, next) {
  let fileName = req.query.filename;

  Promise.try(() => {
    return fs.writeFileAsync(fileName, "Promises are cool! But you MUST call next on errors");
  }).then(() => {
    console.log("Data written successfully!");
    console.log("Let's read newly written data");
    return fs.readFileAsync(fileName);
  }).then((data) => {
    res.send(`Asynchronous read: ${data.toString()}`);
  }).catch(err => {
    console.log('Did I forget to turn off the stove?');
  });
});



router.get("/cars", function (req, res, next) {
  let country = req.query.country;
  console.log(country);

  carFilter(country, req, res, next);

  console.log('done with cars');

});

router.get("/cars/unique", function (req, res, next) {
  
  let fileName = './db.json';

  Promise.try(() => {
    return fs.readFileAsync(fileName);

  }).then((data) => {
    console.log("Data read successfully!");
    let obj = JSON.parse(data);
   
    var countryList = obj.Makes.map(function (car) {
      return car.make_country
    });


    var uniqs = countryList.reduce((acc, val) => {
      acc[val] = acc[val] === undefined ? 1 : acc[val] += 1;
      return acc;
    }, {});
    
  
    console.log('----------------------------------');
    console.log(uniqs)
    //console.log(counts);
    res.send(uniqs);
   
  }).catch(err => {
    //console.log('Did I forget to turn off the stove?');
    next(err);
  });

  console.log('done with cars');
  // next();

});

router.get("/cars/country/:country", function (req, res, next) {
  
  carFilter(req.params.country, req, res, next);
});
  




function carFilter(country, req, res, next){
  Promise.try(() => {
    return fs.readFileAsync(fileName);

  }).then((data) => {
    console.log("Data read successfully!");
    if (typeof country != 'undefined') {
      //res.send('filter here');
      let obj = JSON.parse(data);
      let result = [];
      // console.log(Country)
      result = obj.Makes.filter(car => { 
                 return (car.make_country.toLowerCase() == country.toLowerCase())
      } );
      res.send(result);

    } else {  ///No Query Paramater Specified
      //res.send(`Asynchronous read: ${data.toString()}`);
      res.send(data.toString());
    }

  }).catch(err => {
    //console.log('Did I forget to turn off the stove?');
    next(err);
  });
}


module.exports = router;

