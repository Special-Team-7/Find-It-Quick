const express = require('express');
const router = express.Router();


// Load each controller
const postsController = require('./posts.js');
const bathrooms = require('./bathroom');
const appConfigController = require('./appConfig.js');

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use('/posts', postsController);
router.use('/bathrooms', bathrooms);
router.use('/application-configuration', appConfigController);


module.exports = router;