var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  let resText = `
    <br/>
    
    <ul>
    <li><a href="/friends" />List of friends</a>
    </ul>
  `
  res.send('Use different links to test request and response' + resText);
});


module.exports = router;
