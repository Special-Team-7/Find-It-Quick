const express = require('express');
const router = express.Router();
const {Bathroom,Post,User} = require('../models');


//get all users
router.get('/', (req,res) => {
    res.send('working');
});

router.post('/register', (req,res) => {
    let user = { 
        body_id: req.body.id,
        body_name: req.body.name,
        body_email: req.body.email
     };
    User.create({id:user.body_id, name: user.body_name, email: user.body_email})
    .then(task => {
        res.sendStatus(200);
        console.log(`Looks good?: ${task}`);
    }).catch(err => {
        res.send(err);
    })
});

module.exports = router; 