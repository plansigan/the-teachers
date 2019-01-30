var express     = require('express'),
    router      = express.Router(),
    User        = require('../models/user.js'),
    passport    = require('passport'),
    jwt         = require('jsonwebtoken'),
    global      = require('../src/GlobalVariables.js'),//all global variables,
    bcrypt = require('bcryptjs');

router.post("/register", function (req, res) {
    var body = req.body,
        email = body.email,
        username = body.username,
        password = body.password,
        terms = body.terms;

        bcrypt.hash(password, global.saltRounds, function(err, hash) {
            password = hash
            var newUser = {email,username,password,terms}
            console.log('this is hash ' + hash)
            User.create(newUser)
                .then((response)=>{
                    
                    User.getUserByUsername(response.username,(err,user)=>{
                        if(err) throw err;
                        
                        var userJSON = user.toJSON()
                        const token = jwt.sign(userJSON,global.secret,{
                            expiresIn:604800
                        })
        
                        res.json({
                            success:true,
                            token:'JWT ' + token,
                            user:{
                                id:userJSON._id,
                                name:userJSON.username,
                                email:userJSON.email,
                                expiresIn:global.expiresIn
                                //password:userJSON.password
                            }
                        });
                    })
                })
                .catch((error)=>{
                    if (error) {
                        console.log('error')
                        console.log(error)
                        res.send({
                            success:false,
                            message:error
                        })
                    }
                })
        });

})

//login
router.post('/login',(req,res)=>{
    const loginUser = req.body

    //check if user exist
    User.getUserByUsername(loginUser.username,(err,user)=>{
        if(err) throw err;
        if(!user){
            return res.json({
                success:false,
                msg:'user not found'
            });
        }
        //check if password matched
        User.comparePassword(loginUser.password,user.password,(err,isMatch)=>{
            if(err) throw err;
            if(isMatch){
                var userJSON = user.toJSON();
                const token = jwt.sign(userJSON,global.secret,{
                    expiresIn:604800
                });

                res.json({
                    success:true,
                    token:'JWT ' + token,
                    user:{
                        id:userJSON._id,
                        name:userJSON.name,
                        username:userJSON.username,
                        email:userJSON.email,
                        expiresIn:global.expiresIn
                        //password:userJSON.password
                    }
                })
            } else {
                return res.json({
                    success: false,msg:'Wrong password'
                })
            }

        })
    })
})

module.exports = router;