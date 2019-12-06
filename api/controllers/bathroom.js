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

//get a bathroom by id
router.get('/:id', (req,res) => {
    bid=req.params.id;
    Bathroom.findOne({
        where: {
            id: bid
        }
    }).then(bathroom => {
        if(!bathroom){
            res.sendStatus(404);
        }
        res.json(bathroom);
    })
});



//post a new bathroom location
router.post('/create', (req,res) => {
    let bathroom = req.body;
    if(!bathroom){
        //Send user 404 if there is not body
        res.sendStatus(404);
    }
    console.log(bathroom);
    //Put the bathroom on the database
    Bathroom.create({name:bathroom.name, address:bathroom.address, latitude:bathroom.latitude, 
        longitude:bathroom.longitude, category:bathroom.category, rating:bathroom.rating}).then(task => {
            res.sendStatus(200);
            console.log(`Looks good?: ${task}`);
        }).catch(err => {
            console.log(`Error!: ${err}`)
            res.send(err);
        })
});

//post a review for a bathroom 
router.delete('/', (req,res) => {
     
});


module.exports = router; 