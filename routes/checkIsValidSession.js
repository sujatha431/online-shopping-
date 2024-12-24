var express = require('express');
var router = express.Router();
const process = require('node:process');

/* GET home page. */
router.get('/', function(req, res, next) {

   console.log("Checkck valid user credentials has responded from process " + process.pid)


   res.send(JSON.stringify({isUserLoggedIn: req.session.isLoggedinUser}))
});

module.exports = router;
