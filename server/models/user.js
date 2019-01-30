var mongoose = require('mongoose'),
    passportLocalMongoose = require('passport-local-mongoose'),
    bcrypt = require('bcryptjs');
    

var UserDetails = new mongoose.Schema({
    email:String,
    username:String,
    password:String,
    terms:Boolean
});

UserDetails.plugin(passportLocalMongoose);

var UserSchema = mongoose.model("User",UserDetails);

module.exports = UserSchema

module.exports.getUserById = function(id,callback){
    UserSchema.findById(id,callback)
};

module.exports.getUserByUsername = function(username,callback){
    const query = {username}
    UserSchema.findOne(query,callback);
};

module.exports.addUser = function(newUser,callback){
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newUser.password,salt,(err,hash)=>{
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
};

module.exports.comparePassword = function(candidatePassword,hash,callback){
    bcrypt.compare(candidatePassword,hash,(err,isMatch)=>{
        if(err) throw err;
        callback(null,isMatch);
    })
};