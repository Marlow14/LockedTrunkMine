var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/cars', function (req, res) {
//   //
//   });
  
  router.get('/cars/:make_country', function (req, res) {
    res.render('cars', { 'Count' : {req.params.} });
  });

  
module.exports = router;
