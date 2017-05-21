var express=require("express");
var bodyParser=require("body-parser");
var mongoose=require("mongoose");
var path=require("path");
mongoose.connect('mongodb://localhost/myapp');
var app=express();
var server=require("http").createServer(app);
var io=require("socket.io")(server);
var users=require("./Routes/Users");
var port=3000;
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/users',users);

app.get('*',(req,res)=>{
   res.sendFile(path.join(__dirname,'public/Index.html'));    
});
app.listen(port,()=>{
   console.log("App listening in Port  :"+port);
});