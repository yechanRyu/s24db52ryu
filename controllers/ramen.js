var Ramen = require('../models/ramen');
// List of all Costumes
exports.ramen_list = async function(req, res) {
    try{
    theRamen = await Ramen.find();
    res.send(theRamen);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
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
// VIEWS
// Handle a show all view
exports.ramen_view_all_Page = async function(req, res) {
    try{
        theRamen = await Ramen.find();
    res.render('ramen', { title: 'Ramen Search Results', results: theRamen });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };