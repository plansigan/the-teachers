var express = require('express'),
    router  = express.Router(),
    Product =  require('../models/Products')


//CREATE new PRODUCT
router.post("/product",function(req,res){
    var db          = req.db,
        title       = req.body.title,
        description = req.body.description,
        itemType    = req.body.itemType;
        
    var new_product = new Product({
        title:title,
        description:description,
        itemType: itemType
    })
})

new_post.save(function(error){
    if(error){
        console.log(error)
    }
    res.send({
        success:true,
        message:'Product saved successfully'
    })
})



//READ PRODUCTS
app.get('/products', (req, res) => {
    Product.find({}, 'title description', function (error, products) {
      if (error) { console.error(error); }
      res.send({
        products: products
      })
    }).sort({_id:-1})
  })    