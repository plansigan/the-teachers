var mongoose = require('mongoose'),
    autoIncrement   = require('mongoose-auto-increment'),
    uniqueValidator = require('mongoose-unique-validator')

var SitesSchema = new mongoose.Schema({
    name:{
        type:String,
        unique: true,
        uniqueCaseInsensitive: true
    },
    siteNumber:Number,
    dateAdded: { type: Date, default: Date.now },
    live:Boolean
})


//unique validator for name field
SitesSchema.plugin(uniqueValidator,{
    message:'expected {VALUE} to be unique.'
});

// put the field you wanna auto increment
SitesSchema.plugin(autoIncrement.plugin,{
    model:'site',
    field:'siteNumber',
    startAt: 100,
    incrementBy: 100
})


var Site = mongoose.model("site",SitesSchema)

module.exports = Site