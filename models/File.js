const mongoose = require('mongoose')
const Schema = mongoose.Schema

const fileSchema = new Schema({
    fileName:{ type:String , required:true},
    path:{ type:String , required:true},
    size:{type:Number , required:true}
},{timestamps : true})

module.exports = mongoose.model('File',fileSchema)