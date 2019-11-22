const express = require('express');
var fakeBathrooms = require('../fakeBathrooms');
const router = express.Router();
const {Bathroom,Post,User} = require('../models');
//const { Post } = db;



//get all bathrooms
router.get('/', (req,res) => {
    Bathroom.findAll({
    }).then(bathrooms => {
        if(!bathrooms){
            res.send(404);
        }

        // Temporary so that each bathroom has a temporary picture
        bathrooms.forEach(bathroom => {
            bathroom.dataValues.url = fakeBathrooms[0].url;
        })
        res.json(bathrooms);
        //res.json(fakeBathrooms);
    })
})

//get reviews for a bathroom
router.get('/:id', (req,res) => {
    console.log(`calling specific id! ${req.params.id}`);
    bid=req.params.id;
    Bathroom.findOne({
        where: {
            id: bid
        }
    }).then(bathroom => {
        if(!bathroom){
            res.sendStatus(404);
        }
        console.log(bathroom);
        res.json(bathroom);
    })
});



//post a new bathroom location
router.post('/', (req,res) => {
    
});

//post a review for a bathroom 
router.delete('/', (req,res) => {
    
});


module.exports = router; 