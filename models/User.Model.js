`use strict`;

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email:String,
    favs:Object
})

const userModel = mongoose.model('user',userSchema);

module.exports = {userModel}