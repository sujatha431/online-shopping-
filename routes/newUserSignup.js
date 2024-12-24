var express = require('express');
var router = express.Router();
var mongoDbRef = require("../routes/common/getMongoConnection");
const bcrypt = require('bcrypt');

/* GET home page. */
router.post('/', function(req, res, next) {
    var responseObj = {};
    var userData = req.body; 
    userData.password =  bcrypt.hashSync(userData.password, 5);
    mongoDbRef.getMongoDbRef(userData, 'insert', 'useraccountdetails').then((result) => {
        
        responseObj.msg = 'Success';
        res.send(JSON.stringify(responseObj));
    })
});

module.exports = router;
