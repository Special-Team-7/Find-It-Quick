const express = require('express');
const router = express.Router();


// Load each controller
const bathrooms = require('./bathroom');
const user = require('./user');
const review = require('./review');
const appConfigController = require('./appConfig.js');

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use('/bathrooms', bathrooms);
router.use('/user', user);
router.use('/reviews', review);
router.use('/application-configuration', appConfigController);



module.exports = router;
