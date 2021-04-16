const express = require('express');
const morgan = require('morgan');
const mongoose = require ('mongoose');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(require('./routes'));

// import model workout
const db = require('./models');

// put db name after localhost
mongoose.connect(process.env.MONGODDB_URI ||'mongodb://localhost/workout', {useNewUrlParser: true });


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});