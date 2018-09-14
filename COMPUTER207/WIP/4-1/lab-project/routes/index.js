var express = require('express');
const router = require("express-promise-router")();

const customErrors = require('../custom-errors');

const Promise = require("bluebird");

const moment = require("moment");

module.exports = function({db}) {

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Student Manager' });
});

router.get('/login', function(req, res, next) {
  req.session.userId = user.id;
	req.saveSession();
	console.log(`Saved the user session`);
	res.redirect("/");
});

router.post('/login', (req, res, next) => {
  return Promise.try(() => {
      return db("users").where({
          username: req.body.username
        }).first();
      })
      .then((user) => {
            if (user == null) {
              throw new customErrors.AuthenticationError("Incorrect username");
            } 
            else if (req.body.password != user.password) {   //if make it here, then user exist in db
              console.log(`${req.body.password} != ${user.password}`);
              throw new customErrors.AuthenticationError("Incorrect password");
              
            }
            else {
              res.redirect("/");
            }
      })
});

router.use(function (req, res, next) {
  console.log(`Time: ${moment().format('MMMM Do YYYY, h:mm:ss a')}  `);

  if (req.session.views) {
    req.session.views++
  } else {
    req.session.views = 1
  }
  console.log(`*** ID:${req.sessionID} with UserID: ${req.session.userId} has: req.session.views = ${req.session.views}`);
  next();
});

return router;
}
