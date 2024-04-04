var express = require('express');
const ramen_controlers= require('../controllers/ramen');
var router = express.Router();
/* GET costumes */
router.get('/', ramen_controlers.ramen_view_all_Page );
module.exports = router;
/* GET detail costume page */
router.get('/detail', ramen_controlers.ramen_view_one_Page);
router.get('/create', ramen_controlers.ramen_create_Page);
/* GET create update page */
router.get('/update', ramen_controlers.ramen_update_Page);