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
exports.ramen_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Ramen();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.ramen_type = req.body.ramen_type;
    document.calorie = req.body.calorie;
    document.cost = req.body.cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
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
   