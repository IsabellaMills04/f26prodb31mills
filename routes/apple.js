var express = require('express');
const apple_controller=require('../controllers/apple');
var router = express.Router();

/* GET apples */
router.get('/', apple_controller.apple_view_all_Page);

module.exports = router;
