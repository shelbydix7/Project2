// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
  all: function( cb) {
    var queryString = "SELECT * FROM user";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  create: function(cb, req) {
    var queryString = "INSERT INTO user (name, score1, score2, score3, score4, score5) VALUES (?, ?, ?, ?, ?, ?)";
    connection.query(queryString, [req.body.name, req.body.score1, req.body.score2, req.body.score3, req.body.score4, req.body.score5], function( err,result)
    {
    if (err) {
      throw err;
    }

    cb(result);
  
  });
}
  
};

// Export the orm object for the model.
module.exports = orm;
