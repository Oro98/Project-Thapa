const mongoose =  require('mongoose')
const validator = require('validator')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3
    },
    email: {
        type: String,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalide Email')
            }
        }
    },
    phone: {
        type: Number,
        required: true,
        min:10
    },
    messsage: {
        type: String,
        minLength: 5
    },
    date: {
        type:Date,
        default: Date.now
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User