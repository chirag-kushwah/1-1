const mongoose = require('mongoose')

//define schema
const contactschema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    },
    
},{timestamps:true})

// create collection
const contactmodel = mongoose.model('contact',contactschema)
module.exports = contactmodel