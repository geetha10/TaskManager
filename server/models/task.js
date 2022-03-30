const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    comment : {
        type: String,
        required: true
    },
    timeframe : {
        type: String,
        required: true
    },
    duration : {
        type: Number,
        required: true
    },
    complete : {
        type: Boolean,
        default: false
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    teammates : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }]

}, {timestamps: true});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;