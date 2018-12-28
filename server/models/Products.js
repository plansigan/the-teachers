var mongoose    = require('mongoose'),
    uniqueValidator = require('mongoose-unique-validator'),
    global = require('../src/GlobalVariables.js')//all global variables


var ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        unique: true,
        uniqueCaseInsensitive: true
    },
    description:String,
    itemType: Number,
    author:{
        id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    },
    image:Object,
    price: Number,
    dateAdded: { type: Date, default: Date.now },
    site:Number
})


//unique validator for name field
ProductSchema.plugin(uniqueValidator, {
    message: 'expected {VALUE} to be unique.'
});


var Product = mongoose.model("Product",ProductSchema);

module.exports = Product