var express = require('express'),
    router = express.Router(),
    User = require('../models/user')

router.post("/register", function (req, res) {
    var body = req.body,
        email = body.email,
        username = body.username,
        password = body.password,
        terms = body.terms;

    var newUser = {email,username,password,terms}
    
    //create a new site 
    User.create(newUser)
    .then((response)=>{
        res.send({
            success: true,
            message: `${body.email} has been added`
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
})

module.exports = router;