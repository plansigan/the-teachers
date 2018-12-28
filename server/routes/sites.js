var express = require('express'),
    router = express.Router(),
    Site = require('../models/Sites')
    Product =   require('../models/Products')
    

//CREATE new Site
router.post("/", function (req, res) {
    //console.log(req)
    var body = req.body,
        name = body.name,
        siteNumber = 1,
        live = body.live;
    var newSite = { name,$inc:{siteNumber},live }
    
    //create a new site 
    Site.create(newSite)
    .then((response)=>{
        res.send({
            success: true,
            message: 'site saved successfully'
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


//FETCH ALL SITE
router.get("/", (req, res) => {
    Site.find({}, 'name siteNumber dateAdded live', function (error, sites) {
        if (error) { console.error(error); }
        res.send({sites})
    }).sort({ _id: -1 })
})

//UPDATE SITE
router.put('/update/:id',(req,res)=>{
    Site.findById(req.params.id,`name live`,(err,site)=>{
        if(err){
            console.log(err)
        }

        site.name = req.body.name
        site.live = req.body.live

        site.save((err)=>{
            if(err){
                console.log(err)
            }

            res.send({
                success:true
            })
        })
    })
});


//DELETE SITE
router.delete('/delete/:id', (req, res) => {

    Site.findOne({
        _id:req.params.id
    },function(err,site){
        if(err){
            console.log(err)
        } else {
            console.log(site)
            Product.findOne({
                site:site.siteNumber
            },function(err,product){
                if(err){
                    console.log(err)
                } else if (product){
                    res.send('The site is being used by a product')
                } else {
                    Site.findByIdAndRemove(req.params.id, () => {
                        res.send("deleted successfully");
                    }).catch(err=>{console.log(err)})
                }
            })
        }
    })
})

module.exports = router;