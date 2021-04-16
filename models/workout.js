const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    date: {
        type: String,
        default: Date.now
    },
    exercise: [
        {
           type: {
               type: String,
               trim: true,
               required: 'Enter the type of exercise'
           },
           name: {
               type: String,
               trim: true,
               required: 'Enter the name of the exercise'
           },
           duration: {
            type: Number,
            required:  'Enter the length of time in minutes for the exercise'
           },
           weight:  {
               type: Number,
           },
           reps: {
               type: Number,
           },
           sets: {
               type: Number,
           },
           distance: {
               type: Number,
           }
        }
]
});


module.exports = mongoose.model('Workout', WorkoutSchema);

