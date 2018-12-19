var express =   require('express'),
    router  =   express.Router(),
    Product =   require('../models/Products')

//CREATE new PRODUCT
router.post("/",function(req,res){
    //console.log(req)
    var db          = req.db,
        title       = req.body.title,
        description = req.body.description,
        itemType    = req.body.itemType,
        image       = req.body.image,
        price       = req.body.price

    var newProduct = { title, description, itemType, image, price}

    Product.create(newProduct)
        .then((response)=>{
            res.send({
                success: true,
                message: 'Product saved successfully'
            })
        })
        .catch((error)=>{
            console.log(error.errors.title.message)
            res.send({
                success: false,
                message: error.errors.title.message
            })
        })
})


//FETCH ALL PRODUCTS
router.get('/', (req, res) => {
    Product.aggregate([
        {
            $lookup:{
                    from:"producttypes",
                    localField:"itemType",
                    foreignField:"itemType",
                    as :"itemType"
                }
        }
    ],function (error, products) {
        if (error) { console.error(error); }
        res.send({
          products: products
        })
      }).sort({dateAdded: -1})
})

//VIEW PRODUCT
router.get('/:id',(req,res)=>{
    Product.findOne({ 
        _id: req.params.id
    },function(err,product){
        if(err){
            console.log(err)
        } else {
            res.send({
                product
            })
        }
    })
})

//UPDATE PRODUCT
router.put('/update/:id',(req,res)=>{
    var db = req.db
    console.log('hello')
    Product.findById(req.params.id,'title description itemType',(err,product)=>{
        if(err){
            console.log(err)

        }

        product.title = req.body.title
        product.description = req.body.description
        product.itemType = req.body.itemType
        product.image = req.body.image,
        product.price = req.body.price

        product.save((err)=>{
            if(err){
                console.log(err)
            }

            res.send({
                success:true
            })
        })
    })
})


//DELETE PRODUCT
router.delete('/delete/:id',(req,res)=>{
    Product.findByIdAndRemove(req.params.id,()=>{
        res.send('product deleted successfully')
    })
})

module.exports = router;
