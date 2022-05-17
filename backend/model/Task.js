const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    firstName:{type:String, required:[true,'Value Not provided'], trim:true,maxlength:[10, 'first name can not be more than 10 characters']},
    lastName:{type:String, required:[true,'Value Not provided'], trim:true, maxlength:[10, 'last name can not be more than 10 characters']},
    email:{type:String, required:[true,'Value Not provided'], trim:true},
    password:{type:String, required:[true,'Value Not provided'], trim:true},
})

module.exports = mongoose.model('Task',TaskSchema)