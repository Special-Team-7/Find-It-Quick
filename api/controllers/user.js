const express = require('express');
const router = express.Router();
const {Bathroom,Post,User} = require('../models');


//get all users
router.get('/', (req,res) => {
    res.send('working');
});

// router.post('/register', (req,res) => {
//     let user = {
//         id: req.body.id,
//         name: req.body.name,
//         email: req.body.email
//     };
//     //To do: Insert this user object into postgress using sequealize
//     User.create({id:id, name:name, email:email})
//     .then(task => {
//         res.sendStatus(200);
//         console.log(`Looks good?: ${task}`);
//     }).catch(err=>{
//         console.log("something went wrong!");
//         res.sendStatus(400);
//     })
//     //To do: Send a response to front end to let it know if creation of user
//     //was a success or not
// });

router.post('/register', (req,res) => {
    let user = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email
     };

     res.send(req.body);
     console.log(req.body);

});

module.exports = router; 