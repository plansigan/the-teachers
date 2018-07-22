var express = require('express'),
    router = express.Router(),
    ProductType = require('../models/ProductTypes');
    

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
    ProductType.findByIdAndRemove(req.params.id, () => {
        res.send("deleted successfully");
    })
})

module.exports = router;