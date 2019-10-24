const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    title: 'Find It Quick',
    description: 'The application is an information/rating-based application, similar to Yelp and Waze. This application is used to help locate bathrooms. The bathrooms would be categorized and filtered such as public, mall, park, customers only; in addition to crowdedness of the bathroom. ',
  });
});


module.exports = router;