const express = require('express');
const router = express.Router();
const {Review} = require('../models');

//get all reviews
router.get('/', (req,res) => {
    Review.findAll({
    }).then(reviews => {
      res.send(reviews)
        if(!reviews){
            res.send(404);
        }
    })
})
router.get('/:id', (req, res) => {
  //use bathroom ID to get review for specific bathroom
  console.log(`calling specific id! ${req.params.id}`);
  bid=req.params.id;
  Review.findOne({
      where: {
          id: bid
      }
  }).then(review => {
      if(!review){
          res.sendStatus(404);
      }
      res.json(review);
  })
});

module.exports = router;
