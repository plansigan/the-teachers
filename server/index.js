var express         = require("express"),
    bodyParser      = require("body-parser"),
    cors            = require('cors'),
    morgan          = require("morgan"),
    mongoose        = require('mongoose'),
    passport        = require('passport'),
    Localstrategy   = require("passport-local"),
    fileUpload      = require('express-fileupload'),
    global          = require('./src/GlobalVariables.js'),//all global variables,
    autoIncrement   = require('mongoose-auto-increment'),

// USER MODEL
    User            = require("./models/user.js")

// auto increment initialization
var connection = mongoose.createConnection(global.connection)
autoIncrement.initialize(connection);

//ROUTES
var productRoutes       = require('./routes/products'),
    productTypeRoutes   = require('./routes/productsType'),
    upload              = require('./routes/upload'),
    sites               = require('./routes/sites'),
    user                = require('./routes/user')

const app = express()



//USE APPS
app.use(morgan('combined'))
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
var publicDir = require('path').join(__dirname,'/src/public');
app.use(express.static(publicDir));
app.use(cors())

//PASSPORT CONFIGURATION
app.use(require('express-session')({
    secret:"express-session secret message",
    resave:false,
    saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new Localstrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



mongoose.connect(global.connection,{
    uri_decode_auth: true ,
    useNewUrlParser: true
})
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
app.use("/sites",sites)
app.use("/user",user)

app.get('/',(req,res)=>{
    res.send([{
        title:'API is Running',
        description:"The-Teacher's API is running"
    }])
})


//SERVER START 
app.listen(process.env.PORT || 8081,function(){
    console.log(`server has started in ${process.env.PORT || 8081}`)
})