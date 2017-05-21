var express=require("express");
var router=express.Router();
var User=require('../Models/User');
router.post('/Login',(req,res)=>{
   var username = req.body.LoginValues.Username;
   var password = req.body.LoginValues.Password;
   User.findOne({$or:[{'username':username},{'email':username}]},{'password':password},function(err,user){
     if(err) throw err;
     if(user)
     {
         console.log(user);
     }
   });
});

module.exports=router;