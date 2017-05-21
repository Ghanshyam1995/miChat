var mongoose=require("mongoose");
var Schema=mongoose.Schema;


var userSchema=new Schema({
   email : {type:String},
   password : {type:String},
   username : {type:String},
   age:{type:Number},
   dob :{type:String}
});

module.exports=mongoose.model('User',userSchema);