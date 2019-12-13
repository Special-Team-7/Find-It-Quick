const express = require('express');
const router = express.Router();
const {Bathroom,Post,User} = require('../models');

//get all bathrooms
router.get('/', (req,res) => {
    Bathroom.findAll({
    }).then(bathrooms => {
        if(!bathrooms){
            res.send(404);
        }
        res.json(bathrooms);
    })
})

//get all free bathrooms
router.get('/free', (req,res) => {
    Bathroom.findAll({
        where: {
            category: "free"
          }
    }).then(bathrooms => {
        if(!bathrooms){
            res.send(404);
        }
        res.json(bathrooms);
    })
})


//get all paid bathrooms
router.get('/paid', (req,res) => {
    Bathroom.findAll({
        where: {
            category: "paid"
          }
    }).then(bathrooms => {
        if(!bathrooms){
            res.send(404);
        }
        res.json(bathrooms);
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