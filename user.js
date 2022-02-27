const mongoose = require('mongoose');

//model of user
const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    roll: {
        type: String,
    },
    course: {
        type: String
    },
    Events: {
        type: String
    },
    fee: {
        type: Number
    }
});

//User model to export
const User = mongoose.model('user', userSchema);
module.exports = User;
