//all middleware goes here
var middlewareObject    = {}

middlewareObject.isLoggedIn = function(req,res,next){
        if(req.isAuthenticated()){
            return next();
        }
        res.send({
            success: false,
            message: 'You need to be logged in to do that'
        })
        //res.redirect('/login')
}

module.exports = middlewareObject;  