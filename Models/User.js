var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: { type: String },
    password: { type: String },
    username: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    dob: { type: String },
    pic: { type: String },
    online: { type: Boolean }
});

module.exports = mongoose.model('User', userSchema);