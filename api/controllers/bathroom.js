const express = require('express');
var fakeBathrooms = require('../fakeBathrooms');
const router = express.Router();

router.get('/', (req,res) => {
    res.json(fakeBathrooms);
})

module.exports = router; 