var mongoose = require('mongoose');

var ProductTypeSchema = new mongoose.Schema({
    name:String,
    itemType:Number,
    dateAdded: { type: Date, default: Date.now }
})

var ProductType = mongoose.model("ProductType",ProductTypeSchema)

module.exports = ProductType