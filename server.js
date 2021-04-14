const express = require('express');
const logger = require('morgan');
const mongoose = require ('mongoose');

const PORT = process.env.PORT || 8080;

// const db = require('./models');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect(process.env.MONGODDB_URI ||'mongodb://localhost/populate', {useNewUrlParser: true });

// db.Exercises.create({ name: "" })
// .then(dbExercises => {
//     console.log(dbExercises);
// });

// app.post

// app.get


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});