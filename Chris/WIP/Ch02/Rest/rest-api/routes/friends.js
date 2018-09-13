var express = require('express');
var router = express.Router();

const users = [
  {
    id: 1, name: 'Chase', age: 32,
    interests:
      [{ id: 1, interest: 'Drinking' },
      { id: 2, interest: 'Shopping' }
      ]
  },
  {
    id: 2, name: 'Keith', age: 10,
    interests: [{ id: 1, interest: 'Bar Hopping' },
    { id: 2, interest: 'Drinking' }
    ]
  },
  { id: 3, name: 'Jay', age: 22, interests: [{ id: 1, interest: 'beer' }, { id: 2, interest: 'frisbee' }] },
  {
    id: 4, name: 'Debbie', age: 14,
    interests: [{ id: 1, interest: 'Board games' },
    { id: 2, interest: 'Card games' }
    ]
  },
  { id: 5, name: 'Glenn', age: 55, interests: [{ id: 1, interest: 'Bar Hopping' }, { id: 2, interest: 'Travel' }] },
  { id: 6, name: 'Toni', age: 96, interests: [{ id: 1, interest: 'Alaska' }, { id: 2, interest: 'Tequila' }] }

];

/* GET all firends */
router.get('/friends/', function (req, res) {
  console.log('all friends', users);
  res.send(users);
});
  
/* GET /friend/1 */
router.get('/friends/:id', function (req, res, next) {
    console.log('this matches /user/' + req.params.id);
    var user = users.find((e) => {return e.id == req.params.id});
    console.log('user in req object', user);
  res.send(user)

});

/* GET all hobbies of specific friend */
router.get('/friends/:id/hobby', function (req, res, next) {
  console.log('this matches /friends/' + req.params.id);
  var user = users.find((e) => {return e.id == req.params.id});
  console.log('user in req object', user);
  res.send(user.interests);
});

/* GET all hobbies of specific friend */
router.get('/friends/:id/hobby/:hobbyId', function (req, res, next) {
    var user = users.find((e) => {return e.id == req.params.id});

  console.log('this matches /friends/' + req.params.hobbyId);
  console.log('user in req object', user);
  let interest = user.interests.find((e)=>{return e.id==req.params.hobbyId});
  res.send(interest);
});

/* POST new friend */
// ******* POST  *********
router.post('/friends/', function (req, res) {
  //bodyparser in app.js took care of this already
  users.push(req.body);
  res.status(201);
  res.json(req.body);

});

module.exports = router;
