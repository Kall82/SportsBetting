const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    user_name:
    {
        type:       String,
        trim:       true,
    },

    user_email:
    {
        type:       String,
        trim:       true,
    },

    user_phone:
    {
        type:       Number,
        trim:       true,
    },

    user_password:
    {
        type:       String,
        trim:       true,
    },

    user_avatar:
    {
        type:       String,
        default:    ''
    }

});
const User = mongoose.model('User', userSchema);

module.exports = User;