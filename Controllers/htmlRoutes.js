var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var match = require("../models/mo.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  match.all(function(data) {
    console.log(data);
    res.render("home", data);
  });
});


router.get("/sign", function(req, res) {
  match.all(function(data) {
    console.log(data);
    res.render("sign", data);
  });
});

router.get("/register", function(req, res) {
  match.all(function(data) {
    console.log(data);
    res.render("register", data);
  });
});




router.get("/survey", function(req, res) {
match.all(function(data) {
    console.log(data);
    res.render("survey", data);
  });
});




router.post("/api/friends", function(req, res) {
  match.create([
    "name",
    "email",
    "gender",
    "password"
    
  ], [
    req.body.name, req.body.email, req.body.gender, req.body.password
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});


// Export routes for server.js to use.
module.exports = router;
