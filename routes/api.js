const router = require("express").Router();
const Workout = require('./workout');

router.get('/workout', (req, res) => {
    Workout.find()
    .then (data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
});

router.post('/workout', (req, res) => {
    Workout.create({})
    .then (data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
});

router.put('/workout/:id', ({body, params}, res) => {
    Workout.findByIdAndUpdate(params.id, {$push:{exercise:body} })
    .then (data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
});

router.get('/workout/range', (req, res) => {
    Workout.find()
    .then (data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
});


// ??
module.exports = router;
