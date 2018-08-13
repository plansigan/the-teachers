var express = require('express'),
    router = express.Router(),
    ProductType = require('../models/ProductTypes'),
    Product =   require('../models/Products');
    

//CREATE new PRODUCTTYPE
router.post("/", function (req, res) {
    //console.log(req)
    var db = req.db,
        name = req.body.name,
        itemType = 1;

    var newProductType = { name, $inc:{itemType} }

    //create a new producttype 
    ProductType.create(newProductType)
    .then((response)=>{
        res.send({
            success: true,
            message: 'Product type saved successfully'
        })
    })
    .catch((error)=>{
        if (error) {
            console.log(error.errors.name.message)
            res.send({
                success:false,
                message:error.errors.name.message
            })
        }
    })
})


//FETCH ALL PRODUCTTYPE
router.get("/", (req, res) => {
    ProductType.find({}, 'name itemType dateAdded', function (error, types) {
        if (error) { console.error(error); }
        res.send({
            types: types
        })
    }).sort({ _id: -1 })
})


//DELETE PRODUCTTYPE
router.delete('/delete/:id', (req, res) => {

    ProductType.findOne({
        _id:req.params.id
    },function(err,productType){
        if(err){
            console.log(err)
        } else {
            //console.log(productType.itemType)
            Product.findOne({
                itemType:productType.itemType
            },function(err,product){
                if(err){
                    console.log(err)
                } else if (product){
                    res.send('The product type is being used by a product')
                } else {
                     ProductType.findByIdAndRemove(req.params.id, () => {
                        res.send("deleted successfully");
                    })
                }
            })
        }
    })

    // Product.findOne({itemType:req.params.id},(err,itemType)=>{
    //     if(err){
    //         console.log(err)
    //     }

    //     if(itemType){
    //         console.log('existing')
    //         //res.send('Product Type is being used')
    //     } else {
    //         console.log('deleted')
    //         // ProductType.findByIdAndRemove(req.params.id, () => {
    //         //     res.send("deleted successfully");
    //         // })
    //     }
    // })

    // ProductType.findOne({
    //     _id: req.params.id
    // },(err,product)=>{
    //     if(err){
    //         console.log(err)
    //     }
    // })
    // ProductType.findByIdAndRemove(req.params.id, () => {
    //     res.send("deleted successfully");
    // })
})

module.exports = router;