var express=require("express");
var bodyParser=require("body-parser");
var mongoose=require("mongoose");
mongoose.connect('mongodb://localhost/myapp');
var path=require("path");
var app=express();
var port=3000;
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('*',(req,res)=>{
   res.sendFile(path.join(__dirname,'public/Index.html'));    
});
app.listen(port,()=>{
   console.log("App listening in Port  :"+port);
});