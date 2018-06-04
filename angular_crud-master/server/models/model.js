let mongoose = require('mongoose');

let DogSchema = new mongoose.Schema({
    name: { type: String, required: [true,'This is a better name error, aka chose a better name.'] },
    age: {type: Number},
    breed: {type:String, required:[true, 'Breed is required'], minlength: [5, 'Breed must be at least 5 characters']}
}, { timestamps: true })
mongoose.model('Dog', DogSchema);