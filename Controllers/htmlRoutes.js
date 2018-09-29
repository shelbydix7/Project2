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






//// finding your greatest compatibilty 
    // API GET Request

   

    router.get("/api/match", function(req, res) {
          res.render(data);
        });

    router.post("/api/match", function (req, res) {

      match.yourMatcher([
        "score"
      ],[req.body.score], function(result, data){

        var diff = 50;
        var match = 0;
        var userInput = req.body;
       //console.log("result", userInput.length);
       
        for ( var i = 0; i < match.length; i++) {

       //  console.log("cherno:", match2[i]);

            var difference = 0;
            console.log("==================");
         
            for (j = 0; j < userInput.score.length; j++) {

                difference += Math.abs(result[i].score[j] - match.score[j]);
    
            }

             if (difference < diff){
                 match = i;
                 diff = difference;
             }
        }
   
        res.json(match[match])
  
      }
     
    )       
    });


// Export routes for server.js to use.
module.exports = router;
