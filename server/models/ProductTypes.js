var mongoose = require('mongoose'),
    autoIncrement   = require('mongoose-auto-increment'),
    uniqueValidator = require('mongoose-unique-validator'),
    global          = require('../src/GlobalVariables.js')//all global variables

// auto increment initialization
var connection = mongoose.createConnection(global.connection)
autoIncrement.initialize(connection);

var ProductTypeSchema = new mongoose.Schema({
    name:{
        type:String,
        unique: true,
        uniqueCaseInsensitive: true
    },
    itemType:Number,
    dateAdded: { type: Date, default: Date.now }
})


//unique validator for name field
ProductTypeSchema.plugin(uniqueValidator,{
    message:'expected {VALUE} to be unique.'
});

// put the field you wanna auto increment
ProductTypeSchema.plugin(autoIncrement.plugin,{
    model:'itemType',
    field:'itemType',
    startAt: 100,
    incrementBy: 100
})


var ProductType = mongoose.model("ProductType",ProductTypeSchema)

module.exports = ProductType