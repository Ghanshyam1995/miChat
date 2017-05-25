var express = require("express");
var router = express.Router();
var User = require('../Models/User');

router.post('/Login', (req, res) => {
    var username = req.body.LoginValues.Username;
    var password = req.body.LoginValues.Password;
    User.findOne({ email: username, password: password }, function(err, user) {
        if (err) throw err;
        if (user) {
            User.findOneAndUpdate({ email: username }, { $set: { online: true } }, (err, status) => {
                if (status != null)
                    res.json(user);
            })

        }
    });
});

router.post('/Signup', (req, res) => {
    var user = new User({
        email: req.body.user.Email,
        password: req.body.user.Password,
        username: req.body.user.Username,
        firstname: req.body.user.Firstname,
        lastname: req.body.user.Lastname,
        dob: req.body.user.Dob,
        pic: req.body.user.pic,
        online: false
    });
    user.save((err, result) => {
        if (err)
            res.json({ status: 'false' });
        else {
            res.json({ status: 'true' });
        }
    });

});
router.get("/Profile/:id", (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err) throw err;
        if (user)
            res.json(user);
    });
});

router.get("/OnlineUsers", (req, res) => {
    User.find().where('online').equals(true).exec((err, users) => {
        if (err) throw err;
        if (users)
            res.json(users);
    });
});



module.exports = router;