const router = require('express').Router();
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/view/index.html'));
});

app.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '/view/exercise.html'));
});

app.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '/view/stats.html'));
});


module.exports = router;