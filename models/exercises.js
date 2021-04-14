const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    type: {
        type: String
    },
    name: {
        type: String,
        trim: true,
        required: 'Enter the name of exercise'
    },
    duration: {
        type: Number,
        required: 'Enter the amount of time'
    },
    weight: {
        type: Number,
        required: 'Enter a weight'
    },
    reps: {
        type: Number,
        required: 'Enter the number of reps'
    },
    sets: {
        type: Number,
        required: 'Enter the number of sets'
    }
});

const Exercises = mongoose.model('Exercises', exerciseSchema);

module.exports = Exercises;