var mongoose = require('mongoose');
var TaskSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number},
    breed: {type: String, required: true, minlength:3},
}, {timestamps: true});
mongoose.model('Task', TaskSchema);
