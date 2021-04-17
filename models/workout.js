const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: String,
        default: Date.now
    },
    exercises: [
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
}, {
    // to display virtual field on client side set virtuals to true for toObject and toJSON
    toObject: {
        virtuals: true
    },
 }, {
        toJSON: {
            virtuals: true
        }
    }
);

// take the each aspect of the workoutSchema, create a virtual, with a get function take the total number of each exercise, ex. distance, reduce, so the total or accumulator is added to the curent value and gives a new value resulting in totals for each exercise area
workoutSchema.virtual('totalDuration').get(function () {
    return this.exercises.reduce((total, exercises) => {
        return total + exercises.duration;
    }, 0);
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;

