var express         = require("express"),
    bodyParser      = require("body-parser"),
    cors            = require('cors'),
    morgan          = require("morgan"),
    mongoose        = require('mongoose'),
    fileUpload      = require('express-fileupload'),
    global          = require('./GlobalVariables.js')//all global variables

//MODELS
var Product = require('../models/Products')

//ROUTES
var productRoutes       = require('../routes/products'),
    productTypeRoutes   = require('../routes/productsType'),
    upload              = require('../routes/upload')

const app = express()



//USE APPS
app.use(morgan('combined'))
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));
app.use(cors())



mongoose.connect(global.connection)
var db = mongoose.connection

//check if mongoose connection succeeded or not
db.on("error",console.error.bind(console,"connection error"))
db.once("open",function(callback){
    console.log("Connection succeeded")
})

//USE ROUTES (always place this below bodyParser)
app.use("/products", productRoutes);
app.use("/productTypes", productTypeRoutes);
app.use("/upload",upload);

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