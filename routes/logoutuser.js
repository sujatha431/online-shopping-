var express = require('express');
var router = express.Router();
const process = require('node:process');
/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("Logout user has responded from process " + process.pid)
    // delete req.session;
    req.session.destroy();
    res.send(JSON.stringify({msg: 'success'}))
});

module.exports = router;
