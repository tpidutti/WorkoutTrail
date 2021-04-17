const express = require('express');
const morgan = require('morgan');
const mongoose = require ('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.use(require('./routes/api.js'));
app.use(require('./routes/view.js'));

mongoose.connect(process.env.MONGODDB_URI ||'mongodb://localhost/workout', {useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false });

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});