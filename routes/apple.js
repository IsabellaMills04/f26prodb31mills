var express = require('express');
const apple_controller=require('../controllers/apple');
var router = express.Router();

/* GET apples */
router.get('/', apple_controller.apple_view_all_Page);

/* GET detail apple page */
router.get('/detail', apple_controller.apple_view_one_Page);

module.exports = router;
