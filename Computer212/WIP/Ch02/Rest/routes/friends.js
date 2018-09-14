var express = require('express');
var router = express.Router();

const friends = [
  {
    id: 1, name: 'Sam', age: 32,
    interests:
      [{ id: 1, interest: 'baseball' },
      { id: 2, interest: 'golf' }
      ]
  },
  {
    id: 2, name: 'Bob', age: 10,
    interests: [{ id: 1, interest: 'cars' },
    { id: 2, interest: 'trucks' }
    ]
  },
  { id: 3, name: 'Jay', age: 22, interests: [{ id: 1, interest: 'beer' }, { id: 2, interest: 'frisbee' }] },
  {
    id: 4, name: 'Anil', age: 14,
    interests: [{ id: 1, interest: 'science' },
    { id: 2, interest: 'games' }
    ]
  },
  { id: 5, name: 'Sasha', age: 55, interests: [{ id: 1, interest: 'movies' }, { id: 2, interest: 'travel' }] },
  { id: 6, name: 'John', age: 96, interests: [{ id: 1, interest: 'Alaska' }, { id: 2, interest: 'beer' }] }

];

// *******  GET  *********

router.get('/friends', function (req, res) {
  console.log('list of friend', friends);
  res.send(friends);
});

router.param('id', function (req, res, next, id) {
  console.log('param function with just id of ' + id);
  //set a user object on req
  req.friends = friends.find((e) => {return e.id == id});
  next();  //pass to the next matching middleware
});

router.get('/friends/:id', function (req, res, next) {
  console.log('this matches /friend/' + req.params.id);
  console.log('friend in req object', req.friends);
  next();
});

//this matches the above, so doesnt generate a separate call for router.param 
router.get('/friends/:id', function (req, res) {
  console.log('and this matches too');
  res.send('friend ' + req.params.id + ' is ' + req.friends.name);
});

//*********  POST  ************

router.post('/friends/', function (req, res) {
  //bodyparser in app.js took care of this already
  friends.push(req.body);
  res.status(201);
  res.json(req.body);
});

//*******  DELETE  ***********
router.delete('/friends/:name', function (req, res) {
  //bodyparser in app.js took care of this already
  users.pop(req.body);
  res.status(201);
  res.json(req.body);
});


module.exports = router;
