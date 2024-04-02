var Ramen = require('../models/ramen');
// List of all Costumes
exports.ramen_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Ramen list');
};
// for a specific Costume.
exports.ramen_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Ramen detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.ramen_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Ramen create POST');
};
// Handle Costume delete from on DELETE.
exports.ramen_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Ramen delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.ramen_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Ramen update PUT' + req.params.id);
};