// Import the ORM to create functions that will interact with the database.
let orm = require("../config/orm.js");

let burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(result) {
            callback(result);
        });
    },

    insertOne: function(dirtyBurger, callback) {
        orm.insertOne("burgers", dirtyBurger, function(result) {
            callback(result);
        });
    },

    updateOne: function(dirtyBurger, callback) {
        orm.updateOne("burgers", dirtyBurger, function(result) {
            callback(result);
        });
    }
};

// Export the database functions for the controller (burger_controller.js).
module.exports = burgers;