const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:String,
    completed:Boolean
})

module.exorts = mongoose.model('Task', TaskSchema)