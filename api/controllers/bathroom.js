const express = require('express');
var fakeBathrooms = require('../fakeBathrooms');
const router = express.Router();
//const { Post } = db;



//get all bathrooms
router.get('/', (req,res) => {
    



    res.json(fakeBathrooms);
})

//get reviews for a bathroom
router.get('/:id', (req,res) => {
    res.json("workin");
});

//get user profile
router.get('/:userid', (req,res) => {

});

//post a review for a bathroom 
router.post('/', (req,res) => {
    
});

//post a new bathroom location
router.post('/', (req,res) => {
    
});

//post a review for a bathroom 
router.delete('/', (req,res) => {
    
});


module.exports = router; 