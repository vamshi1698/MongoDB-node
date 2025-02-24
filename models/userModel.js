const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    number:{
        type:Number
    },
    date:{
        type:Date,
        default:(new Date).toLocaleString()

    }
})

exports.User = mongoose.model('users',userSchema)