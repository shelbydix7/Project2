// Import the ORM to create functions that will interact with the database.


var orm = require("../config/orm.js");

var match = {

    all: function(cb) {
     orm.all("", function(res) {
      cb(res);
   });
  },

  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    console.log("Values")
    console.log(vals);
    orm.create("", cols, vals, function(res) {
      cb(res);
    });
  },


  // finding your greatest compatibility
  yourMatcher: function(cols, vals, cb) {
    console.log("Values")
    console.log(vals);
    orm.yourMatcher("", cols, vals, function(res) {
      cb(res);
    });
  },


 // finding your greatest compatibility


};

// Export the database functions for the controller (htmlRoutes.js).
module.exports = match;


