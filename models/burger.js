// Import the ORM to create functions that will interact with the database.
let orm = require("../config/orm.js");

let burger = {
    selectAll: function(callback) {
        orm.all("burgers", function(result) {
            callback(result);
        });
    },

    insertOne: function(dirtyBurger, callback) {
        orm.create("burgers", dirtyBurger, function(result) {
            callback(result);
        });
    },

    updateOne: function(dirtyBurger, callback) {
        orm.update("burgers", dirtyBurger, function(result) {
            callback(result);
        });
    }
};

// Export the database functions for the controller (burgerController.js).
module.exports = burgers;