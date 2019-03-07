var mongoose = require('mongoose')
    bcrypt = require('bcryptjs');
    

var UserDetails = new mongoose.Schema({
    email:String,
    username:{type:String,require:true,index:true,unique:true,sparse:true},
    password:{type:String,required:true},
    terms:Boolean
});


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
            newUser.createUser(callback);
        });
    });
};

module.exports.comparePassword = function(candidatePassword,hash,callback){
    bcrypt.compare(candidatePassword,hash,(err,isMatch)=>{
        if(err) throw err;
        callback(null,isMatch);
    })
};