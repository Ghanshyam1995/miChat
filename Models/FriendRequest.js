var mongoose = require("mongoose");
var schema = mongoose.Schema;

var friendsSchema = new schema({
    UserId: { type: String },
    FriendId: { type: String },
    RequestTime: { type: Date, set: Date.now }
});
module.exports = mongoose.model('Friend', friendsSchema);