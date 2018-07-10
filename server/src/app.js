var express     = require("express"),
    bodyParser  = require("body-parser"),
    cors        = require('cors'),
    morgan      = require("morgan")


const app = express()

//USE APPS
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())


app.get('/',(req,res)=>{
    res.send([{
        title:'hello world',
        description:'Hi there! How are you?'
    }])
})


//SERVER START 
app.listen(process.env.PORT || 3000,function(){
    console.log(`server has started in ${process.env.PORT || 3000}`)
})