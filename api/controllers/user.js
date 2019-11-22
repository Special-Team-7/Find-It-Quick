const express = require('express');
const router = express.Router();


//get all users
router.get('/', (req,res) => {
    res.send('working');
});

router.post('/register', (req,res) => {
    let user = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email
    };
    //To do: Insert this user object into postgress using sequealize
    console.log(req.body)
    //To do: Send a response to front end to let it know if creation of user
    //was a success or not
    res.send(req.body);
});

module.exports = router; 