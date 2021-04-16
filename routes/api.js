const router = require("express").Router();
const Workout = require('./models/workout');

app.get('/api/workout', (req, res) => {
    Workout.find()
});

app.post('/api/workout', (req, res) => {
    Workout.create({})
});

app.put('/api/workout/:id', (req, res) => {

});

app.get('/api/workout/range', (req, res) => {

});



module.exports = router;
