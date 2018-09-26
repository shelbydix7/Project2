var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var cat = require("../models/cat.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  cat.all(function(data) {
 //   var hbsObject = {
 //    cats: data
  //  };
    console.log(data);
    res.render("index", data);
  });
});


router.get("/survey", function(req, res) {
  cat.all(function(data) {
  // var hbsObject = {
   //  cats: data
    //};
    console.log(data);
    res.render("survey", data);
  });
});


router.get("/api/friends", function(req, res) {
  cat.all(function(data) {
   // var hbsObject = {
   //  cats: data
  // };
    console.log(data);
    res.render("home", data);
  });
});


router.post("/api/friends", function(req, res) {
  cat.create([
    "name"
  ], [
    req.body.name
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});





// Export routes for server.js to use.
module.exports = router;
