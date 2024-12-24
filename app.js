var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var validateCredentialsRouter = require("./routes/validateUserCredentials");
var productRouter = require("./routes/getProductDetails");
var newUserSignupRouter = require("./routes/newUserSignup");
var checkSession = require("./routes/checkIsValidSession");
var logoutUser = require("./routes/logoutuser");
var addNewProductRouter = require("./routes/addNewProduct._backend");
var uploadFileRouter = require("./routes/fileUpload");
var empDetailsRouter = require("./routes/employeeDetails")
var session = require("express-session");

var app = express();

console.log("process ID " + process.pid)

app.use(session({
  secret: 'this is my secreddata to encrypt',
  cookie: {
    originalMaxAge: 50000
  }
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

console.log(__dirname);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/validate/userCredentials", validateCredentialsRouter);
app.use("/get/productDetails", productRouter);
app.use("/new/userSignup", newUserSignupRouter);
app.use("/check/isValidSession", checkSession);
app.use("/user/logout", logoutUser);
app.use("/add/newProduct", addNewProductRouter);
app.use("/upload/file", uploadFileRouter);
app.use("/get/empDetails", empDetailsRouter);

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
