var mongoose = require('mongoose');
var passportLocalmMongoose = require('passport-local-mongoose')

var UserSchema = new mongoose.Schema({
    email:String,
    username:String,
    password:String,
    terms:boolean
});

UserSchema.plugin(passportLocalmMongoose);

module.exports =mongoose.model("User",UserSchema);