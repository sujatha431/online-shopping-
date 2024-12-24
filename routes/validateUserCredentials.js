var express = require("express");
var router = express.Router();
var mongoDbRef = require("../routes/common/getMongoConnection");
var bcrypt = require("bcrypt");
require("dotenv").config();
const process = require('node:process');
var jwt = require("jsonwebtoken");
router.post('/', (req, res, next) => {
    console.log("Validate user credentials has responded from process " + process.pid)
    let responseObj = {};
    console.log("process env");
    console.log(process.env);
    var jsonToken = jwt.sign(req.body, process.env.ACCESS_JWT_SECRET);
    mongoDbRef.getMongoDbRef(req.body, 'find', 'useraccountdetails').then((response) => {
        console.log("DB response")
        console.log(response)

        if (response && response[0]) {
            if (bcrypt.compareSync(req.body.password, response[0].password)) {
                responseObj.msg = 'Valid';
                req.session.isLoggedinUser = true;
                responseObj.token = jsonToken;
            } else {
                responseObj.msg = 'Invalid';
                responseObj.info = 'PWD not matching';
                req.session.isLoggedinUser = false;
            }            
        } else {
            responseObj.msg = 'Invalid';
            responseObj.info = 'UId not found';
            req.session.isLoggedinUser = false;
        }
        res.send(JSON.stringify(responseObj));
        
    })
});


module.exports = router;


