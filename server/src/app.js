var express     = require("express"),
    bodyParser  = require("body-parser"),
    cors        = require('cors'),
    morgan      = require("morgan"),
    mongoose    = require('mongoose');

//MODELS
var Product = require('../models/Products')

//ROUTES
var productRoutes = require('../routes/products')
var productTypeRoutes = require('../routes/productsType')

const app = express()



//USE APPS
app.use(morgan('combined'))
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

//mongoose db connection
mongoose.connect('mongodb://localhost:27017/products')
var db = mongoose.connection

//check if mongoose connection succeeded or not
db.on("error",console.error.bind(console,"connection error"))
db.once("open",function(callback){
    console.log("Connection succeeded")
})

//USE ROUTES (always place this below bodyParser)
app.use("/products", productRoutes);
app.use("/productTypes", productTypeRoutes);

app.get('/',(req,res)=>{
    res.send([{
        title:'hello world',
        description:'Hi there! How are you?'
    }])
})


//SERVER START 
app.listen(process.env.PORT || 8081,function(){
    console.log(`server has started in ${process.env.PORT || 8081}`)
})