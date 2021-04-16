const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/view/index.html'));
});

router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '/view/exercise.html'));
});

router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '/view/stats.html'));
});


module.exports = router;