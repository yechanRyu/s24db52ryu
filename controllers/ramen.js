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
exports.ramen_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Ramen.findById(req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }};
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
exports.ramen_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Ramen.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle Costume update form on PUT.
exports.ramen_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
     try {
     let toUpdate = await Ramen.findById( req.params.id)
     // Do updates of properties
     if(req.body.ramen_type)
        toUpdate.ramen_type = req.body.ramen_type;
     if(req.body.calorie) toUpdate.calorie = req.body.calorie;
     if(req.body.cost) toUpdate.cost = req.body.cost;
     let result = await toUpdate.save();
     console.log("Sucess " + result)
     res.send(result)
     } catch (err) {
     res.status(500)
     res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
     }
    if(req.body.checkboxsale) toUpdate.sale = true;
    else toUpdate.sale = false;

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
   // Handle a show one view with id specified by query
exports.ramen_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Ramen.findById( req.query.id)
    res.render('ramendetail',
   { title: 'Ramen Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }};
    // Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.ramen_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('ramencreate', { title: 'Ramen Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };