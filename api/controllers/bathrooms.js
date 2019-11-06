const express = require('express');
const router = express.Router();
const db = require('../models');
//const { Post } = db;

//some mock stuff while i connect the database
let bathroom = {
    1 : {name: 'McDonald',location: 'NY'},
    2 : {name: 'Starbucks',location: 'BK'},
}

let review = {
    1 : {UID: '12', BID: '1',review: "stinks"},
    2 : {UID: '13',BID: '2',review: "good!"},
}

let user = {
    12 : {name: 'Ant'},
    23 : {name: 'Sam'},
}


//get all bathrooms
router.get('/', (req,res) => {
    
});

//get reviews for a bathroom
router.get('/bathroom/:id', (req,res) => {

    
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