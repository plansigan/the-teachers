var express = require('express'),
    router = express.Router(),
    ProductType = require('../models/ProductTypes');

//CREATE new PRODUCTTYPE
router.post("/", function (req, res) {
    //console.log(req)
    var db = req.db,
        name = req.body.name,
        itemType = req.body.itemType;

    var newProductType = { name, itemType }

    //create a new producttype 
    ProductType.create(newProductType, function (error) {
        if (error) {
            console.log(error)
        }
        res.send({
            success: true,
            message: 'Product type saved successfully'
        })
    })
})


//FETCH ALL PRODUCTS
router.get("/", (req, res) => {
    ProductType.find({}, 'name itemType', function (error, types) {
        if (error) { console.error(error); }
        res.send({
            types: types
        })
    }).sort({ _id: -1 })
})


module.exports = router;