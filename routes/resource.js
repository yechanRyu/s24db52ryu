var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var ramen_controller = require('../controllers/ramen');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/ramen', ramen_controller.ramen_create_post);
// DELETE request to delete Costume.
router.delete('/ramen/:id', ramen_controller.ramen_delete);
// PUT request to update Costume.
router.put('/ramen/:id', ramen_controller.ramen_update_put);
// GET request for one Costume.
router.get('/ramen/:id', ramen_controller.ramen_detail);
// GET request for list of all Costume items.
router.get('/raman', ramen_controller.ramen_list);
module.exports = router;