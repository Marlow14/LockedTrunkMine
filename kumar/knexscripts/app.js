var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var moment = require('moment');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var hobbiesRouter = require('./routes/hobbies');
var gameRouter = require('./routes/score');
var favicon = require('serve-favicon');

var app = express();

//view
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(function (req, res, next) {
  console.log(`Time: ${moment().format('MMMM Do YYYY, h:mm:ss a')}  `);
  next();
});

app.use('/', indexRouter);
app.use('/students', studentsRouter);

app.use('/users', usersRouter);
app.use('/hobbies', hobbiesRouter);
app.use('/scores', gameRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  //next(createError(404));
  let err = new Error('Oh no! the page cannot be found');
  err.status = 404;
  req.timestamp = new Date();
  next(err);  
 // next();
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
