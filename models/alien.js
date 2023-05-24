const mongoose = require ('mongoose');

const alienSchema = new mongoose.Schema({
    nombre: {
        type:String,
        required:true
    },
    tecnologia: {
        type:String,
        required:true
    },
    sub:{
        type:Boolean,
        required:true,
        default:false
    }
}) 

module.exports = mongoose.model('Alien',alienSchema);