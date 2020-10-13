var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressSession = require('express-session');

var indexRouter = require('./routes/index');
var monitorRouter = require('./routes/monitor');
var settingRouter = require('./routes/setting');
var operationRouter = require('./routes/operation');
var logdataRouter = require('./routes/logdata');
var alarmRouter = require('./routes/alarm');
var ajaxRouter = require('./routes/ajax');
var show_userRouter = require('./routes/show_user');
var update_userRouter = require('./routes/update_user');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);  
app.use('/monitor', monitorRouter);
app.use('/setting', settingRouter);
app.use('/operation', operationRouter);
app.use('/logdata', logdataRouter);
app.use('/alarm', alarmRouter);
app.use('/ajax', ajaxRouter);
app.use('/show_user', show_userRouter);
app.use('/update_user', update_userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
