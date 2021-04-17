const router = require("express").Router();
const Workout = require("../models/workout");

router.get('/api/workouts', async (req, res) => {
  await Workout.find()
  .then((data) => {
    res.json(data)
  })
  .catch((err) => {
    res.json(err)
  })
});

router.get("/api/workouts", async (req, res) => {
  await Workout.find()
  .then(data => {
    res.json(data)
  })
  .catch(err => {
    res.json(err)
  })
});

router.put("/api/workouts/:id", async ({ body, params }, res) => {
  await Workout.findByIdAndUpdate(params.id, { $push: { exercise: body } })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/api/workouts", async (req, res) => {
  await Workout.create({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/workouts/range", async (req, res) => {
  await Workout.find({}).limit(7)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});


module.exports = router;
