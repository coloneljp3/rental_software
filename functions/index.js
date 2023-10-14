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
    res.send('
 <nav>
    <form class = "" id = "b_1" style = "display:inline-block" action = "" method = "POST">
         <input name = "" value = '++' />
      <button type = "submit" style = "width:inherit;height:inherit">Find Landlords</button>
    </form>
    <form class = "" id = "b_2" style = "display:inline-block" action = "" method = "POST">
         <input name = "" value = '++' />
      <button type = "submit" style = "width:inherit;height:inherit">Rentals</button>
    </form>
    <form class = "" id = "b_3" style = "display:inline-block" action = "" method = "POST">
         <input name = "" value = '++' />
      <button type = "submit" style = "width:inherit;height:inherit">Signup/Login</button>
    </form>
    <form class = "" id = "b_4" style = "display:inline-block" action = "" method = "POST">
         <input name = "" value = '++' />
      <button type = "submit" style = "width:inherit;height:inherit">Home</button>
    </form>  
</nav>        
<body>
      
      
      
</body>         
         ')
  }
})

router.get('/',(req,res)=>{

  
})

app.use('/.netlify/functions/write_account',router)

module.exports.handler = serverless(app);
