var express = require('express');
var moment = require('moment');
var router = express.Router();

let students = [{
  nameFirst: "Devin",
  nameLast: "Durgan",
  email: "Devin.Durgan@gmail.com",
  hireDate: moment("01/19/2015", "MM/DD/YYYY")
}, {
  nameFirst: "Cristal",
  nameLast: "Adams",
  email: "Cristal.Adams@live.com",
  hireDate: moment("07/29/2016", "MM/DD/YYYY")
}, {
  nameFirst: "Nettie",
  nameLast: "McGlynn",
  email: "Nettie.McGlynn@gmail.com",
  hireDate: moment("08/29/2015", "MM/DD/YYYY")
}];

// *******  GET  *********

router.get('/ ', function (req, res) {
  res.render('students', { 
		title: 'Students' ,
		students: students
			
		});
});

// router.param('id', function (req, res, next, id) {
//   console.log('param function with just id of ' + id);
//   //set a user object on req
//   req.students = students.find((e) => {return e.id == id});
//   next();  //pass to the next matching middleware
// });

// router.get('/students/:id', function (req, res, next) {
//   console.log('this matches /student/' + req.params.id);
//   console.log('student in req object', req.students);
//   next();
// });

// //this matches the above, so doesnt generate a separate call for router.param 
// router.get('/students/:id', function (req, res) {
//   console.log('and this matches too');
//   res.send('student ' + req.params.id + ' has ' + req.friends.gpa);
// });

module.exports = router;
