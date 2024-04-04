var express = require('express');
const ramen_controlers= require('../controllers/ramen');
var router = express.Router();
var passport = require('passport');
// A little function to check if we have an authorized user and continue on redirect to login.
const secured = (req, res, next) => {
    if (req.user){
        return next();
    }
    res.redirect("/login");
}
/* GET ramen */
router.get('/', ramen_controlers.ramen_view_all_Page );

/* GET detail ramen page */
router.get('/detail', ramen_controlers.ramen_view_one_Page);

/* GET create ramen page */
router.get('/create', ramen_controlers.ramen_create_Page);

/* GET create update page */
router.get('/update', secured, ramen_controlers.ramen_update_Page);

/* GET delete costume page */
router.get('/delete', ramen_controlers.ramen_delete_Page);
module.exports = router;
