const express = require('express');
const router = express.Router();
const {Review} = require('../models');

//get all reviews
router.get('/', (req,res) => {
    res.send('reviews')
    Review.findAll({
    }).then(reviews => {
        if(!reviews){
            res.send(404);
        }
        res.json(reviews);


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
      console.log(review);
      res.json(review);
  })
});

module.exports = router;
