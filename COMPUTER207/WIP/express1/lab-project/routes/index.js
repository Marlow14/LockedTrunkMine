var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// "index" name of the view under the "views" directory: index.pug

module.exports = router;
