// *********************************************************************************
// orm.js - This file offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************

// Dependencies
// =============================================================
let connection = require("./connection.js");

// ORM
// =============================================================

let tableName = "burgers";

let orm = {
  // Here our ORM is creating a simple method for performing a query of the entire table.
  // We make use of the callback to ensure that data is returned only once the query is done.
  selectAll: function(callback) {
    let s = "SELECT * FROM " + tableName;

    connection.query(s, function(err, result) {
      callback(result);
    });
  },

  // Here our ORM is creating a simple method for performing a query of a single character in the table.
  // Again, we make use of the callback to grab a specific character from the database.
  insertOne: function(dirtyBurger, callback) {
    let s = "insert into" + tableName + " (burger_name, devoured) values (?,?)";

    connection.query(s, [dirtyBurger.name, dirtyBurger.devoured], function(err, result) {
      callback(result);
    });
  },

  // Here our ORM is creating a simple method for adding burgers to the database
  // Effectively, the ORM's simple updateOne method translates into a more complex SQL INSERT statement.
  // Thumbs up if you get the reference to the dirtyBurger
  updateOne: function(dirtyBurger, callback) {

    let s = "update" + tableName + "set burger_name = ?, devoured = ?, where id = ?";

    connection.query(s, [dirtyBurger.name, dirtyBurger.devoured, dirtyBurger.id], function(err, result) { 
        callback(result);
    });
  }
};

module.exports = orm;
