var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");
mongoose.connect('mongodb://localhost/miChat');
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server);
var users = require("./Routes/Users");
var port = 3000;
var User = require("./Models/User");
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/users', users);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/Index.html'));
});


io.on('connection', (socket) => {
    console.log('User Connected');

    socket.on("disconnected", () => {
        console.log("user disconnected");

    });

    socket.on('Login', (Id) => {
        User.findById(Id, (err, user) => {
            io.emit('NewOnlineUser', { newUser: user });
        });
    });
    socket.on('Contact', () => {
        User.find((err, users) => {
            if (err) console.log(err);
            io.emit('AllUsers', { Contactlist: users });
        });
    });
});

server.listen(port, () => {
    console.log("App listening in Port  :" + port);
});