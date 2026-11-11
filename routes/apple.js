var express = require('express');
const apple_controllers=require('../controllers/apple');
var router = express.Router();

/* GET apples */
router.get('/', apple_controllers.apple_view_all_Page);

module.exports = router;
