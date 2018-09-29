// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {

  
  all: function(input, cb ) {
    var queryString = "SELECT * FROM userMatch";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
     cb( result);
    });
  },

create: function(table, cols, vals, cb) {
  var queryString = "INSERT INTO register" + table;

  queryString += " (";
  queryString += cols.toString();
  queryString += ") ";
  queryString += "VALUES (";
  queryString += "?,?,?,?";
  queryString += ") ";

  console.log(queryString);

  connection.query(queryString, vals, function(err, result) {
    if (err) {
      throw err;
    }
    cb(result);
  });
},


// finding your match

yourMatcher: function(table, cols, vals, cb) {
  var queryString = "INSERT INTO userMatch" + table;

  queryString += " (";
  queryString += cols.toString();
  queryString += ") ";
  queryString += "VALUES (";
  queryString += "?";
  queryString += ") ";

  //console.log(queryString);

  connection.query(queryString, [vals], function(err, result) {
    if (err) {
      throw err;
    }
   // console.log(result);
    cb(result);
  });
},


};

// Export the orm object for the model.
module.exports = orm;
