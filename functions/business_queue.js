'use strict'
var express = require('express');
var app = express();
var router = express.Router();
var mysql = require('mysql2');
var conn = mysql.createConnection(process.env.DATABASE_URL);
var bodyParser = require('body-parser');
var serverless = require('serverless-http');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
router.post('/',(req,res)=>{
var user = req.body.user;
var email_user = req.body.email_user;
var email_psw = req.body.email_psw;
if(user == "undefined"){
res.send("")
  
}
  else{
res.send("")
    
  }
})

router.get('/',(req,res)=>{

  
})

app.use('/.netlify/functions/write_account',router)

module.exports.handler = serverless(app);
