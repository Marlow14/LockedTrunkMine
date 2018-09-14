var express = require('express');
var router = express.Router();
var createError = require('http-errors');
var fs = require("fs");


router.get("/cars", function (req, res, next) {
	let fileName = "db.json";

	let cars = [];
	   
	fs.readFile(fileName, function (err, data) {
	  if (err) {
		next(createError(400, "invalid filename" )); // Explicitly Pass errors to Express.
	  }
	  else {
		cars = JSON.parse(data.toString());
		//res.send("file contents: " + data.toString());
		res.send("cars: " + cars.Makes);
	  }
	});
  });

 
module.exports = router;

