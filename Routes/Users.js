var express = require("express");
var router = express.Router();
var User = require('../Models/User');

router.post('/Login', (req, res) => {
    var username = req.body.LoginValues.Username;
    var password = req.body.LoginValues.Password;
    User.findOne({ $or: [{ 'username': username }, { 'email': username }] }, { 'password': password }, function(err, user) {
        if (err) throw err;
        if (user) {
            res.json(user);
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
        pic: req.body.user.pic
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



module.exports = router;