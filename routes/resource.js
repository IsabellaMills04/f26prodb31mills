var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var apple_controller = require('../controllers/apple');

/// API ROUTE ///

// GET resources base.
router.get('/', api_controller.api);

/// APPLE ROUTES ///

// POST request for creating a Apple.
router.post('/apple', apple_controller.apple_create_post);

// DELETE request to delete Apple.
router.delete('/apple/:id', apple_controller.apple_delete);

// PUT request to update Apple.
router.put('/apple/:id', apple_controller.apple_update_put);

// GET request for one Apple.
router.get('/apple/:id', apple_controller.apple_detail);

// GET request for list of all Apple items.
router.get('/apple', apple_controller.apple_list);
module.exports = router;