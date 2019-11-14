const express = require('express');
const router = express.Router();


//get all users
router.get('/', (req,res) => {
    res.send('working');
})

module.exports = router; 