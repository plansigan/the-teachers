var mongoose    = require('mongoose')


var ProductSchema = new mongoose.Schema({
    title:String,
    description:String,
    itemType: Number,
    author:{
        id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    },
    dateAdded: { type: Date, default: Date.now }
})

var Product = mongoose.model("Product",ProductSchema);

module.exports = Product