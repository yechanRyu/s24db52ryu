var express = require('express');
const ramen_controlers= require('../controllers/ramen');
var router = express.Router();
/* GET costumes */
router.get('/', ramen_controlers.ramen_view_all_Page );
module.exports = router;
