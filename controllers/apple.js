var Apple = require('../models/apple');

// List of all Apples
exports.apple_list = async function(req, res) {
    try{
        theApples = await Apple.find();
        res.send(theApples);
    }
    catch(err){
        res.status(500);
        res.send(`{"error":${err}}`);
    }
};

// for a specific Apple
exports.apple_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Apple.findById(req.params.id)
        res.send(result)
    } catch(error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle Apple create on POST
exports.apple_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Apple();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"variety":"Fuji", "color":"red", "weeight":"200"}
    document.variety = req.body.variety;
    document.color = req.body.color;
    document.weight = req.body.weight;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Apple delete from on DELETE
exports.apple_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Apple delete DELETE ' + req.params.id);
};

// Handle Apple update form on PUT
exports.apple_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try{
        let toUpdate = await Apple.findById(req.params.id)
        // Do updates of properties
        if (req.body.variety)
            toUpdate.variety = req.body.variety;
        if(req.body.color)
            toUpdate.color = req.body.color;
        if(req.body.weight)
            toUpdate.weight = req.body.weight;
        let result = await toUpdate.save();
        console.log("Success " + result)
        res.send(result)
    } catch(err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};

// VIEWS
// Handle a show all view
exports.apple_view_all_Page = async function (req, res) {
    try{
        theApples = await Apple.find();
        res.render('apple', { title: 'Apple Search Results', results: theApples });
    }
    catch(err){
        res.status(500);
        res.send(`{"error":${err}}`);
    }
};