const mongoose= require('mongoose');

const  orgInfoSchema=mongoose.Schema({
name:{
    type:String,
    required:['true','name must be provided']
},
address:{
    type:String,
    required:['true','name must be provided']
},
contactperson:{
    type:String,
    required:['true','name must be provided']
},
phone:{
    type:String,
    required:['true','name must be provided']
},
sector:{
    type:String,
    required:['true','name must be provided']
},
district:{
    type:String,
    required:['true','name must be provided']
},
region:{
    type:String,
    required:['true','name must be provided']
}
})

module.exports= mongoose.model('OrgInfo',orgInfoSchema);