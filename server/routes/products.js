var express = require('express'),
    router  = express.Router(),
    Product =  require('../models/Products')

//CREATE new PRODUCT
router.post("/",function(req,res){
    //console.log(req)
    var db          = req.db,
        title       = req.body.title,
        description = req.body.description,
        itemType    = req.body.itemType;

    var newProduct = { title, description, itemType}
    console.log(newProduct)

    //create a new product 
    Product.create(newProduct,function (error) {
        if (error) {
            console.log(error)
        }
        res.send({
            success: true,
            message: 'Product saved successfully'
        })
    })
})





//READ PRODUCTS
router.get('/products', (req, res) => {
    Product.find({}, 'title description', function (error, products) {
      if (error) { console.error(error); }
      res.send({
        products: products
      })
    }).sort({_id:-1})
  })    


module.exports = router;