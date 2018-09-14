var express = require('express');
var router = express.Router();
let moment = require('moment');

/* GET users listing. */
let hobbies = [{
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



router.get('/', function(req, res, next) {
  //res.send('respond with a ------hobby ----------resource');
 /* res.send( { 
    title: 'Hobbies' ,
    hobby: ['Cricket','Running','Tennis']
       
   });*/


   res.render('hobbies', { 
		title: 'Hobbies' ,
		hobbies: hobbies
			
		});
});

module.exports = router;