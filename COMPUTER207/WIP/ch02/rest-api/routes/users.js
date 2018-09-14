var express = require('express');
var router = express.Router();

const users = [
  {
    id: 1, name: 'Connie', age: 15,
    interests:
      [{ id: 1, interest: 'sleeping' },
      { id: 2, interest: 'travel' }
      ]
  },
  {
    id: 2, name: 'Mimi', age: 11,
    interests: [{ id: 1, interest: 'art' },
    { id: 2, interest: 'cooking' }
    ]
  },
  { id: 3, name: 'Ying', age: 44, interests: [{ id: 1, interest: 'beer' }, { id: 2, interest: 'science' }] },
  {
    id: 4, name: 'Stephani', age: 45,
    interests: [{ id: 1, interest: 'medicine' },
    { id: 2, interest: 'dogs' }
    ]
  }
];

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.json(users);
});

router.param('id', function (req, res, next, id) {
  console.log('param function with just id of ' + id);
  //set a user object on req
  req.user = users.find((e) => {return e.id == id});
  next();  //pass to the next matching middleware
});

router.get('/users/:id', function (req, res, next) {
  console.log('this matches /user/' + req.params.id);
  console.log('user in req object', req.user);
  next();
});

//this matches the above, so doesnt generate a separate call for router.param 
router.get('/users/:id', function (req, res) {
  console.log('and this matches too');
  res.send('user ' + req.params.id + ' is ' + req.user.name);
});

// **** more than one parameter
//get all interests for a given user
router.get('/users/:id/interest', function (req, res) {
  let interests = req.user.interests.map((e) => { return e.interest }).join(", ");
  res.send(`user ${req.params.id} is ${req.user.name} who likes ${interests}`);
});

//get one interest for a given user
router.get('/users/:id/interest/:interestid', function (req, res) {
  let userId = req.params.id;
  let interestId = req.params.interestid;
  let interest = req.user.interests.find((e)=>{return e.id==interestId});
  res.send(`user ${userId} is ${req.user.name} who likes this one thing ${interest.interest}`);
});

// ******* POST  *********
router.post('/users/', function (req, res) {
  //bodyparser in app.js took care of this already
  req.body = {
    id: 5, name: 'Sean', age: 45,
    interests: [{ id: 1, interest: 'jogging' },
    { id: 2, interest: 'yoga' }
    ]
  };
  users.push(req.body);
  res.status(201);
  res.json(req.body);
});
module.exports = router;
